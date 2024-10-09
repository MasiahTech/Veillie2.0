"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-center px-4">
      <h1 className="text-5xl font-bold mb-6">Welcome to TicketPro</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Streamline your support process, manage tickets efficiently, and empower your team with our comprehensive ticketing system.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard">Try Demo</Link>
        </Button>
      </div>
    </div>
  );
}