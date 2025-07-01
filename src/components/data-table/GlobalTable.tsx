"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import {  ChevronDown, Edit2Icon, MoreHorizontal, Trash2, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useTranslation } from "react-i18next"
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog"
import { useNavigate} from "react-router-dom"
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";

// Add custom styles for text truncation
const customStyles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}


type TableRow = {
  id: string | number;
  name?: string;
  title?: string;
  ar_name?: string;
  ar_title?: string;
  ar_description?: string;
  ar_content?: string;
  description?: string;
  content?: string;
  images: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};


export function GlobalTable({data, pageName}: {data: TableRow[], pageName: string}) {

    const [deleteTarget, setDeleteTarget] = React.useState<string | number | null>(null)
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const { toast } = useToast();
    const [token] = useLocalStorage("token", "");
    const queryClient = useQueryClient();
    const isRTL = i18n.dir() === "rtl";

    const { mutate: deleteImage } = useMutation({
    mutationFn: async (id: string) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/delete-${pageName}/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Delete error:", errorText);
          throw new Error(`HTTP ${response.status}: Failed to delete ${pageName}`);
        }
        
        return response.json();
      } catch (error) {
        console.error(`Delete ${pageName} error:`, error);
        throw error;
      }
    },
    onSuccess: () => {
      // Use dynamic query key based on pageName
      const queryKey = pageName === "blog" ? "blogs" : 
                       pageName === "service" ? "services" : 
                       pageName === "consultant" ? "consultants" : 
                       [pageName];
      
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast({
        title: "نجاح",
        description: t("dashboard.delete_success"),
        variant: "default",
      });
    },

    onError: (error) => {
      console.error("Delete mutation error:", error);
      toast({
        title: "خطأ",
        description: t("dashboard.delete_error"),
        variant: "destructive",
      });
    },
  });

  const handleDelete = (id: string | number) => {
    if (!id) {
      console.error("No ID provided for deletion");
      toast({
        title: "خطأ",
        description: "معرف غير صحيح",
        variant: "destructive",
      });
      return;
    }
    console.log(`Deleting ${pageName} with ID:`, id);
    deleteImage(String(id));
  };


const columns: ColumnDef<TableRow>[] = [
  
  {
    accessorKey:"images",
    header: () => (
      <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
        {t("dashboard.image") || "Image"}
      </div>
    ),
    cell: ({ row }) => {
      const images = row.getValue("images") as string[]
      if (!images || images.length === 0) {
        return (
          <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} w-16 h-16`}>
            <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-xs text-gray-400">{t("dashboard.no_image") || "No Image"}</span>
            </div>
          </div>
        )
      }
      return (
        <div className={`flex items-center gap-1 sm:gap-2 ${isRTL ? 'justify-end flex-row-reverse items-end' : 'justify-start flex-row items-start'}`}>
          {images.slice(0, 2).map((image, index) => (
            <Avatar key={index} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
              <AvatarImage 
                src={image} 
                alt={`${t(`dashboard.${pageName}`) || pageName} ${t("dashboard.image")} ${index + 1}`}
                className="object-cover"
              />
              <AvatarFallback className="text-xs">{index + 1}</AvatarFallback>
            </Avatar>
          ))}
          {images.length > 2 && (
            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              +{images.length - 2}
            </span>
          )}
        </div>
      )
    },
  },

  {
    accessorKey: "name",
    header: () => (
      <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
        {t("dashboard.name") || "Name"}
      </div>
    ),
    cell: ({ row }) => {
      // Handle different field names for different content types
      const nameField = row.original.name || row.original.title;
      const arNameField = row.original.ar_name || row.original.ar_title;
      const descriptionField = row.original.description || row.original.content;
      const arDescriptionField = row.original.ar_description || row.original.ar_content;
      
      const name = isRTL ? (arNameField || nameField) : nameField;
      const description = isRTL ? (arDescriptionField || descriptionField) : descriptionField;
      
      return (
        <div className={`flex flex-col gap-1 ${isRTL ? 'text-right items-end' : 'text-left items-start'} min-w-0 w-full`}>
          <span className={`font-medium text-sm sm:text-base truncate w-full ${isRTL ? 'text-right' : 'text-left'}`} title={name}>
            {name}
          </span>
          {description && (
            <span className={`text-xs sm:text-sm text-muted-foreground line-clamp-2 break-words w-full ${isRTL ? 'text-right' : 'text-left'}`} title={description}>
              {description}
            </span>
          )}
        </div>
      )
    },
  },
  {
    id: "actions",
    header: () => (
      <div className={` flex ${isRTL ? 'text-right justify-end' : 'text-left justify-start'}`}>
        {t("dashboard.actions") || "Actions"}
      </div>
    ),
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original

      return (
        <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? "end" : "start"} className={isRTL ? 'text-right' : 'text-left'}>
              <DropdownMenuLabel className={isRTL ? 'text-right' : 'text-left'}>
                {t("dashboard.actions") || "Actions"}
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  const nameToeCopy = data.name || data.title || "";
                  navigator.clipboard.writeText(nameToeCopy);
                }}
                className={`${isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row'}`}
              >
                {t("dashboard.copy_name") || "Copy Name"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  // Navigate to edit page
                  navigate(`/admin/edit-${pageName}/${data.id}`);
                }}
                className={`${isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row'}`}
              >
                <Edit2Icon className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t("dashboard.edit") || "Edit"}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setDeleteTarget(data.id)}
                className={`text-destructive focus:text-destructive ${isRTL ? 'text-right flex-row-reverse' : 'text-left flex-row'}`}
              >
                <Trash2 className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t("dashboard.delete") || "Delete"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]





  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className={`w-full ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
        <Input
          placeholder={isRTL ? `البحث في ${t(`dashboard.${pageName}s`) || `${pageName}s`}...` : `Filter ${pageName}s...`}
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className={`w-full sm:max-w-sm ${isRTL ? 'text-right pr-4' : 'text-left pl-4'}`}
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className={`${isRTL ? 'sm:ml-auto' : 'sm:ml-auto'} w-full sm:w-auto`}>
              <ChevronDown className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t("dashboard.columns") || "Columns"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={isRTL ? "start" : "end"} className={isRTL ? 'text-right' : 'text-left'}>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                // Translate column names
                const getColumnName = (id: string) => {
                  switch (id) {
                    case 'select':
                      return isRTL ? 'تحديد' : 'Select';
                    case 'images':
                      return isRTL ? 'الصورة' : 'Image';
                    case 'name':
                      return isRTL ? 'الاسم' : 'Name';
                    case 'actions':
                      return isRTL ? 'الإجراءات' : 'Actions';
                    default:
                      return id;
                  }
                };
                
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className={`${isRTL ? 'text-right' : 'text-left'}`}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {getColumnName(column.id)}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className={isRTL ? 'text-right' : 'text-left'}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead 
                        key={header.id} 
                        className={`whitespace-nowrap font-semibold px-4 py-3 ${isRTL ? 'text-right' : 'text-left'}`}
                        style={{ 
                          direction: isRTL ? 'rtl' : 'ltr',
                          textAlign: isRTL ? 'right' : 'left'
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`hover:bg-muted/50 ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell 
                        key={cell.id} 
                        className={`py-2 sm:py-4 px-4 ${isRTL ? 'text-right' : 'text-left'}`}
                        style={{ 
                          direction: isRTL ? 'rtl' : 'ltr',
                          textAlign: isRTL ? 'right' : 'left'
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()

                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className={`h-24 text-center ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 py-8">
                      <span className="text-muted-foreground">
                        {t("dashboard.no_results") || "No results found."}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {t("dashboard.try_different_search") || "Try adjusting your search criteria."}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
        <div className={`text-muted-foreground text-sm order-2 sm:order-1 ${isRTL ? 'text-right' : 'text-left'}`}>
          <span className="hidden sm:inline">
            {table.getFilteredSelectedRowModel().rows.length} {t("dashboard.of") || "of"}{" "}
            {table.getFilteredRowModel().rows.length} {t("dashboard.rows_selected") || "row(s) selected."}
          </span>
          <span className="sm:hidden">
            {table.getFilteredSelectedRowModel().rows.length}/{table.getFilteredRowModel().rows.length} {t("dashboard.selected") || "selected"}
          </span>
        </div>
        <div className={`flex items-center gap-2 order-1 sm:order-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 px-2 sm:px-4"
          >
            <span className="hidden sm:inline">{t("dashboard.previous") || "Previous"}</span>
            <span className={`sm:hidden ${isRTL ? 'rotate-180' : ''}`}>←</span>
          </Button>
          <div className={`flex items-center gap-1 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span>{table.getState().pagination.pageIndex + 1}</span>
            <span>{t("dashboard.of") || "of"}</span>
            <span>{table.getPageCount()}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-8 px-2 sm:px-4"
          >
            <span className="hidden sm:inline">{t("dashboard.next") || "Next"}</span>
            <span className={`sm:hidden ${isRTL ? 'rotate-180' : ''}`}>→</span>
          </Button>
        </div>
      </div>
      
      {/* Delete Modal */}
      {deleteTarget && (
        <DeleteModal
          onClose={() => setDeleteTarget(null)}
          onDelete={() => {
            handleDelete(deleteTarget);
            setDeleteTarget(null);
          }}
        />
      )}
    </div>
  )
}


const DeleteModal = ({
  onClose,
  onDelete,
}: {
  onClose: () => void;
  onDelete: () => void;
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent
        className="flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 sm:p-6"
        style={{
          minWidth: "0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "fixed",
        }}
      >
        <DialogHeader className={`w-full text-center space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-lg md:text-xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
            {t("dashboard.dilog_title")}
          </h2>
          <p className={`text-gray-500 text-sm md:text-base ${isRTL ? 'text-right' : 'text-left'}`}>
            {t("dashboard.confirm_delete")}
          </p>
        </DialogHeader>
        <div className={`mt-6 flex flex-col sm:flex-row justify-center gap-3 w-full ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 h-10 sm:h-11"
          >
            <X className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t("dashboard.cancel")}
          </Button>
          <Button
            variant="destructive"
            onClick={onDelete}
            className="flex-1 h-10 sm:h-11"
          >
            <Trash2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t("dashboard.delete")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
