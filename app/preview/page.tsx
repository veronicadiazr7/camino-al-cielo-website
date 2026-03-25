import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const variants = [
  {
    name: "border",
    description: "Default bordered card style.",
  },
  {
    name: "noBorder",
    description: "No border, clean surface.",
  },
  {
    name: "background",
    description: "Muted background card.",
  },
  {
    name: "roundedBorder",
    description: "Bordered card with extra rounded corners.",
  },
] as const;

export default function PreviewPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">Card Variants Preview</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        View and compare all card variants in one page.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {variants.map((item) => (
          <Card key={item.name} variant={item.name} className="h-full">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Example content for the <strong>{item.name}</strong> variant.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
