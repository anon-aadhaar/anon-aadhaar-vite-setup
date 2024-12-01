import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import { useEffect } from "react";

export default function App() {
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log(anonAadhaar.status);
    }
  }, [anonAadhaar]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <main className="flex flex-col items-center gap-8 bg-white rounded-2xl max-w-screen-sm mx-auto h-[24rem] md:h-[20rem] p-8">
        <h1 className="font-bold text-3xl">Welcome to Anon Aadhaar Example</h1>
        <p>Prove your Identity anonymously using your Aadhaar card.</p>

        <LogInWithAnonAadhaar nullifierSeed={1234} />

        <div className="flex flex-col items-center gap-4">
          {anonAadhaar.status === "logged-in" && (
            <>
              <p>✅ Proof is valid</p>
              <p>Got your Aadhaar Identity Proof</p>
              <>Welcome anon!</>
              {latestProof && (
                <AnonAadhaarProof code={JSON.stringify(latestProof, null, 2)} />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
