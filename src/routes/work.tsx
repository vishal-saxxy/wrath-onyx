import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route=createFileRoute("/work")({staticData:{sitemap:false},component:WorkLayout});
function WorkLayout(){return <Outlet/>}
