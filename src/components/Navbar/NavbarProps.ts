import { User } from "../../types/types";

/**
 * Interface for a menu item.
 */
export interface ProfileMenuItem {
  /**
   * The URL to navigate to when the menu item is clicked.
   */
  to: string;

  /**
   * The label of the menu item.
   */
  label: string;

  /**
   * The source URL for the icon of the menu item.
   */
  iconSrc: string;

  /**
   * Optional click handler for the menu item.
   */
  onClick?: () => void;
}

/**
 * Interface for the Navbar component props.
 */
export interface NavBarProps {
  /**
   * An array of navigation items, each containing a name and URL.
   */
  navItems: { name: string; url: string }[];


   /**
   * An array of navigation items as a guest, each containing a name and URL.
   */
  navItemsAsGuest: { name: string; url: string }[];

  /**
   * The authenticated user object.
   */
  authUser: User | undefined;

  /**
   * An array of profile menu items.
   */
  profileMenu: ProfileMenuItem[];

  /**
   * Optional click handler for the register action.
   */
  onResgister?: () => void;

  /**
   * Optional click handler for the sign-in action.
   */
  onSignIn?: () => void;
}
