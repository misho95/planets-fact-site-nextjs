export default async function Home({
  params,
}: {
  params: Promise<{ planet: string }>;
}) {
  const planet = (await params).planet;

  return <main>hello {planet}</main>;
}
