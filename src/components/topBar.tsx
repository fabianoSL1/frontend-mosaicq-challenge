import { authService } from "../api/auth/authService";
import { useAuth } from "../hooks/useAuth";
import { Container } from "./Container";

export function TopBar() {
    const { setAuth } = useAuth();

    const handleAuth = async () => {
        setAuth(await authService.createToken());
    };

    return (
        <div className="w-full border-b-2">
            <Container>
                <div className="p-4 flex align-middle justify-end">
                    <button
                        onClick={handleAuth}
                        className="rounded border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white"
                    >
                        auth
                    </button>
                </div>
            </Container>
        </div>
    );
}
