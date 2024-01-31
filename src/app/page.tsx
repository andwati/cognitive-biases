import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import fs from "fs";
import path from "path";
import Link from "next/link";

type Bias = {
  name: string;
  description: string;
  link: string;
};

export default async function Home() {
  const dataBuffer = fs.readFileSync(path.resolve("_data/data.json"));
  const jsonData: Bias[] = JSON.parse(dataBuffer.toString());

  return (
    <main>
      <nav className="flex justify-between">
        <h1>Cognitive biases</h1>
        <div>
          <ThemeSwitcher />
        </div>
      </nav>
      <div className="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {jsonData.map((bias, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{bias.name}</CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <p>{bias.description}</p>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button>
                <Link href={bias.link} target="_blank">
                  View on Wikipedia
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
