"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, BicepsFlexed } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const linkClass = (path: string) =>
    `flex items-center gap-1.5 text-sm transition-colors ${
      pathname === path ? "text-primary underline underline-offset-4" : "hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto w-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <BicepsFlexed className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono text-primary hover:text-purple-500">
            Muscle-AI
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link href="/" className={linkClass("/")}>
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link href="/generate-program" className={linkClass("/generate-program")}>
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link href="/profile" className={linkClass("/profile")}>
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>

              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-purple-500"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-purple-500">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
