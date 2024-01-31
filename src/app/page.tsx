import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: Number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch("http://localhost:4000/recipes");
  const recipes = await response.json();
  return recipes;
}

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardHeader>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>

            <CardFooter>
              <button>View Recipe</button>
              {recipe.vegan && <p>Vegan</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
