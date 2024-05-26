import { ReactNode } from "react";
/**
 * Interface for a menu item.
 */
interface MenuItem {
  /**
   * The label of the menu item, which can be a React node (JSX element).
   */
  label: ReactNode;

  /**
   * The onclick handler function for the menu item.
   */
  onclick: () => void;

  /**
   * A unique key for the menu item.
   */
  key: string;
}

/**
 * Interface for the user object.
 */
export interface AuthUser {
  /**
   * The name of the user.
   */
  name: string;

  /**
   * The image of the user.
   */
  image: string;

  /**
   * An array of menu items associated with the user.
   */
  menu: MenuItem[];
}
/**
 * Interface for the Navbar component props.
 */
export interface NavBarProps {
  /**
   * An array of navigation items, each containing a name and URL.
   */
  navItems?: { name: string; url: string }[];

  /**
   * A boolean indicating whether the user is authenticated.
   */
  authUser?: AuthUser;
}
