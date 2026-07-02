import Nav from "@/components/Nav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Nav />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
    </div>
  );
}
