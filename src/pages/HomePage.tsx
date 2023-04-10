import React, { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debouncedValue = useDebounce(search);
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(debouncedValue, {
    skip: debouncedValue.length < 3,
    refetchOnFocus: true, // IT MAKES A REQUEST AFTER FOCUS TO A PAGE, WHEN YOU COME BACK
  });

  useEffect(() => {
    console.log(debouncedValue);
    setDropdown(debouncedValue.length > 3 && users?.length! > 0);
  }, [debouncedValue, users]);

  return (
    <div className="flex pt-10 mx-auto h-screen w-screen flex-col items-center">
      {isError && (
        <p className="text-center text-red-600">Something went wrong</p>
      )}
      <div className="relative w-[560px] flex flex-col gap-5">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {dropdown && (
          <ul className="absolute list-none top-[55px] left-0 right-0 max-h-[300px] shadow-md bg-white rounded-md p-3 overflow-y-scroll">
            {isLoading && <p className="text-center">Loading...</p>}

            {users?.map((user) => (
              <li
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {" "}
                {user.login}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
