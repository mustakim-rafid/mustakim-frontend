import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

export function MobileNav() {
  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 text-neutral-400 hover:text-white transition bg-neutral-800 rounded-full">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-neutral-900 border-neutral-800 text-white w-75"
        >
          <SheetHeader className="text-left border-b border-neutral-800 pb-4 mb-4">
            <SheetTitle className="text-white">
              <div className="flex items-center gap-2 font-semibold text-lg text-neutral-0">
                <Image
                  src={"/logo.png"}
                  alt="main-logo"
                  height={20}
                  width={20}
                />
                <span className="font-extralight">PPA</span>
              </div>
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4 p-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors py-2 border-b border-neutral-800/50"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
