// src/components/layouts/Header.tsx
import Link from "next/link";
import Button from "../common/Button";
import { useRouter } from "next/router"; // Correct hook for Pages Router
import { RootState } from "@/store/store"; // Import RootState type
import { useSelector } from "react-redux"; // Import useSelector

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;
  // Select the 'value' from the 'counter' slice of the Redux store
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          {
            !["/counter-app"].includes(pathname) ? (
              <>
              <Button
                buttonLabel="Sign In"
                buttonBackgroundColor="red"
              />
              <Button
                buttonLabel="Sign Up"
                buttonBackgroundColor="blue"
              />
              </>
            ) : (
              // Display current count from Redux when on counter-app page
              <p className=" font-semibold text-lg">Current count : {count}</p>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;