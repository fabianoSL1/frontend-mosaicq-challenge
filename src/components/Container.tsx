import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
    return <div className="max-w-screen-md m-auto">{children}</div>;
}
