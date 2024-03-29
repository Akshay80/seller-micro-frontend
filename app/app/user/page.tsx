import { PAGE_TITLE } from "@/libs/helper/src/index";
import { Metadata } from "next";
import UserList from "./user-list";

export const metadata: Metadata = {
  title: `Users - ${PAGE_TITLE}`,
  description: '',
};

function Users() {
  return (
    <>
      <UserList />
    </>
  );
}

export default Users;