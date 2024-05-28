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
   * The authenticated user object.
   */
  authUser: AuthUser | undefined;

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
