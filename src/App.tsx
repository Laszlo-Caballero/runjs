import { Editor } from "@monaco-editor/react";
import { useTheme } from "./theme/useTheme";
import { useEffect, useState } from "react";
export default function App() {
  const { handleMount } = useTheme();
  const [code, setCode] = useState<string | undefined>("");
  const [value, setValue] = useState<string | undefined>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Guardar el log original
    const originalLog = console.log;

    // Sobrescribir console.log
    console.log = (...args: unknown[]) => {
      originalLog(...args);
      setValue((value) => `${value} ${args}\n`);
    };

    // Limpiar el efecto al desmontar el componente
    return () => {
      console.log = originalLog; // Restaurar el log original
    };
  }, []);
  useEffect(() => {
    try {
      eval(code ?? "");
      if (!code) setValue("");
      setError("");
    } catch (error) {
      setError((error as string).toString());
    }
  }, [code]);

  return (
    <main className="flex flex-1 bg-[#272822] h-screen w-full">
      <section className="h-full w-1/2">
        <Editor
          defaultLanguage="javascript"
          options={{
            minimap: { enabled: false },
            scrollbar: { vertical: "hidden", horizontal: "hidden" },
            fontSize: 16,
          }}
          theme="custom"
          onMount={handleMount}
          onChange={(value) => setCode(value ?? "")}
        />
      </section>
      <section className="h-full w-1/2 border-l p-2 text-white">
        {error ? <pre>{error}</pre> : value ?? ""}
      </section>
    </main>
  );
}
