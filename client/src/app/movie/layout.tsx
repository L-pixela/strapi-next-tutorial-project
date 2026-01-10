export default function MovieLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return (
        <section>
            <aside>
                Movie Sidebar
            </aside>
            {children}
        </section>
    )
}