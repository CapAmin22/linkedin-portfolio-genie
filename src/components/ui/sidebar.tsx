
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"

// Sidebar variants
const sidebarVariants = cva(
  "flex flex-col gap-2 h-full bg-background border-r transition-all",
  {
    variants: {
      size: {
        sm: "w-[70px] min-w-[70px]",
        md: "w-[200px] min-w-[200px]",
        lg: "w-[280px] min-w-[280px]",
      },
      collapsed: {
        true: "w-[70px] min-w-[70px]",
      },
    },
    defaultVariants: {
      size: "md",
      collapsed: false,
    },
  }
)

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, size, collapsed, defaultCollapsed, onCollapsedChange, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed || collapsed || false)

    React.useEffect(() => {
      if (collapsed !== undefined && collapsed !== isCollapsed) {
        setIsCollapsed(collapsed)
      }
    }, [collapsed, isCollapsed])

    React.useEffect(() => {
      if (onCollapsedChange) {
        onCollapsedChange(isCollapsed)
      }
    }, [isCollapsed, onCollapsedChange])

    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ size, collapsed: isCollapsed }), className)}
        {...props}
      />
    )
  }
)
Sidebar.displayName = "Sidebar"

// Sidebar Header
const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 border-b", className)} {...props} />
))
SidebarHeader.displayName = "SidebarHeader"

// Sidebar Footer
const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-auto p-4 border-t", className)} {...props} />
))
SidebarFooter.displayName = "SidebarFooter"

// Sidebar Content
const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 overflow-auto p-4", className)} {...props} />
))
SidebarContent.displayName = "SidebarContent"

// Sidebar Section
const SidebarSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-4", className)} {...props} />
))
SidebarSection.displayName = "SidebarSection"

// Sidebar Item
interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode
  href?: string
  active?: boolean
  external?: boolean
  collapsed?: boolean
}

const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ className, href, children, icon, active, external, collapsed, ...props }, ref) => {
    const isExternal = external || (href && href.startsWith("http"))
    
    return (
      <a
        ref={ref}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(
          buttonVariants({ variant: active ? "secondary" : "ghost" }),
          "justify-start gap-2 h-10",
          active && "bg-secondary",
          collapsed && "justify-center",
          className
        )}
        {...props}
      >
        {icon}
        {!collapsed && children}
      </a>
    )
  }
)
SidebarItem.displayName = "SidebarItem"

// Sidebar Nav
const SidebarNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1", className)}
    {...props}
  />
))
SidebarNav.displayName = "SidebarNav"

// Sidebar Group (collapsible)
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  icon?: React.ReactNode
  defaultOpen?: boolean
  collapsed?: boolean
}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, title, icon, defaultOpen = false, collapsed, children, ...props }, ref) => {
    const id = React.useId()
    
    if (collapsed) {
      return (
        <div ref={ref} className={cn("relative group", className)} {...props}>
          <div className="flex items-center justify-center h-10">
            {icon}
          </div>
          <div className="absolute left-full top-0 ml-2 bg-background rounded-md border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            <div className="p-2 min-w-40">
              <div className="font-medium mb-2">{title}</div>
              {children}
            </div>
          </div>
        </div>
      )
    }
    
    return (
      <div ref={ref} className={className} {...props}>
        <Collapsible defaultOpen={defaultOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-md hover:bg-accent">
            <div className="flex items-center gap-2">
              {icon}
              <span className="text-sm font-medium">{title}</span>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 ui-open:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-1 pb-2">
            <div className="pl-4 border-l ml-2 space-y-1">
              {children}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    )
  }
)
SidebarGroup.displayName = "SidebarGroup"

// Sidebar Toggle
interface SidebarToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  collapsed?: boolean
}

const SidebarToggle = React.forwardRef<HTMLButtonElement, SidebarToggleProps>(
  ({ className, collapsed, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "h-8 w-8 p-0",
        className
      )}
      {...props}
    >
      {collapsed ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
)
SidebarToggle.displayName = "SidebarToggle"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarItem,
  SidebarGroup,
  SidebarSection,
  SidebarToggle,
}
