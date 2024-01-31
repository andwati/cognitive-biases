import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import fs from "fs";
import path from "path";
import Link from "next/link";

type BiasType = {
  name: string;
  description: string;
  wikipedia_link: string;
};

type Bias = {
  bias: string;
  description: string;
  wikipedia_link: string;
  types: BiasType[];
};

export default async function Home() {
  const dataBuffer = fs.readFileSync(path.resolve("_data/data.json"));
  const jsonData: Bias[] = JSON.parse(dataBuffer.toString());
  return (
    <main>
      <nav className="flex justify-between">
        <h1>Cognitive biases</h1>
        <div>
          {" "}
          <ThemeSwitcher />
        </div>
      </nav>
      <div className="grid grid-cols-3 gap-8">
        {jsonData.map((bias, index) => (
          <>
            <div key={index}>
              <h3>{bias.bias}</h3>
              <p>{bias.description}</p>
            </div>
            {bias.types.map((type, i) => {
              <Card key={i} className="flex flex-col justify-between">
                <CardHeader className="flex-row gap-4 items-center">
                  <div>
                    <CardTitle>{type.name}</CardTitle>
                    <CardDescription>
                      Bias Group Link : {bias.wikipedia_link}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent>
                  <p>{type.description}</p>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button>
                    <Link href={type.wikipedia_link} target="_blank">
                      View on Wikipedia
                    </Link>
                  </Button>
                </CardFooter>
              </Card>;
            })}
          </>
        ))}
      </div>
    </main>
  );
}
