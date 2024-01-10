"use client";

import Link from "next/link";

const Users = ({ user }) => {
  return (
    <ul className="max-h-full">
      {user.map((user) => {
        return (
          <Link key={user.id} href={`/users/${user.id} `}>
            <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between h-100em">
              {" "}
              <div>
                {" "}
                <h1 className="font-bold">
                  {user.id} {user.first_name} {user.last_name}
                </h1>
                <p className="text-slate-200">email: {user.email}</p>
              </div>
              <img
                src={user.avatar}
                alt="avatar"
                className="rounded-full w-20"
              />
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Users;
