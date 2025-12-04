import React from 'react';
import { RoughFilter } from './filters';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number | string;
}

const IconWrapper = ({ 
  children, 
  className, 
  fillColor, 
  strokeColor = "currentColor", 
  strokeWidth = 1.5,
  id,
  ...props 
}: IconProps & { id: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <defs>
      <RoughFilter id={id} />
    </defs>
    <g filter={`url(#${id})`} stroke={strokeColor}>
      {children}
    </g>
  </svg>
);

// Helper to create the watercolor fill effect
// If fillColor is provided, use it. Otherwise use currentColor with low opacity.
const WatercolorFill = ({ d, color }: { d: string, color?: string }) => (
  <path 
    d={d} 
    fill={color || "currentColor"} 
    fillOpacity={color ? 1 : 0.1} 
    stroke="none" 
  />
);

// --- Icons ---

export const CoffeeCup = (props: IconProps) => (
  <IconWrapper id="rough-coffee" {...props}>
    <WatercolorFill d="M5 8C5 8 5.5 19 12 19C18.5 19 19 8 19 8H5Z" color={props.fillColor} />
    <path d="M5 8C5 8 5.5 19 12 19C18.5 19 19 8 19 8H5Z" fill="none" />
    <path d="M19 10C20.5 10 21.5 11 21.5 12.5C21.5 14 20 15 19 15" fill="none" />
    <path d="M8 3C8.5 4 7.5 5 8 6" strokeOpacity="0.6" />
    <path d="M12 2C12.5 3.5 11.5 4.5 12 6" strokeOpacity="0.6" />
    <path d="M16 3C16.5 4 15.5 5 16 6" strokeOpacity="0.6" />
  </IconWrapper>
);

export const Heart = (props: IconProps) => (
  <IconWrapper id="rough-heart" {...props}>
    <WatercolorFill d="M12 21C12 21 4 16 3 10C2 5 8 3 12 7C16 3 22 5 21 10C20 16 12 21 12 21Z" color={props.fillColor} />
    <path d="M12 21C12 21 4 16 3 10C2 5 8 3 12 7C16 3 22 5 21 10C20 16 12 21 12 21Z" fill="none" />
    <path d="M6 8C7 7 8 7 9 8" strokeOpacity="0.4" strokeWidth="1" />
  </IconWrapper>
);

export const BrightStar = (props: IconProps) => (
  <IconWrapper id="rough-star" {...props}>
    <WatercolorFill d="M12 2L14.5 9L22 9.5L16 14L18 21L12 17L6 21L8 14L2 9.5L9.5 9L12 2Z" color={props.fillColor} />
    <path d="M12 2L14.5 9L22 9.5L16 14L18 21L12 17L6 21L8 14L2 9.5L9.5 9L12 2Z" fill="none" />
    <circle cx="12" cy="12" r="1" fill="currentColor" fillOpacity="0.4" stroke="none" />
  </IconWrapper>
);

export const Leaf = (props: IconProps) => (
  <IconWrapper id="rough-leaf" {...props}>
    <WatercolorFill d="M12 21C12 21 13 14 20 10C22 4 16 2 12 2C8 2 2 4 4 10C11 14 12 21 12 21Z" color={props.fillColor} />
    <path d="M12 21C12 21 13 14 20 10C22 4 16 2 12 2C8 2 2 4 4 10C11 14 12 21 12 21Z" fill="none" />
    <path d="M12 4C12 4 11.5 10 12 21" />
    <path d="M12 10L16 8" strokeOpacity="0.6" />
    <path d="M12 14L8 12" strokeOpacity="0.6" />
  </IconWrapper>
);

export const Send = (props: IconProps) => (
  <IconWrapper id="rough-send" {...props}>
    <WatercolorFill d="M22 2L11 13" color={props.fillColor} />
    <path d="M22 2L11 13" stroke="none" /> 
    <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="none" />
  </IconWrapper>
);

export const ChatBubble = (props: IconProps) => (
  <IconWrapper id="rough-chat" {...props}>
    <WatercolorFill d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.5 4 16.5 5.5 18L4 21L8 20C9.5 20.8 10.8 21 12 21Z" color={props.fillColor} />
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.5 4 16.5 5.5 18L4 21L8 20C9.5 20.8 10.8 21 12 21Z" fill="none" />
  </IconWrapper>
);

export const Bug = (props: IconProps) => (
  <IconWrapper id="rough-bug" {...props}>
    <path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" fill="none" />
    <path d="M12 14V20" />
    <path d="M12 6V4" />
    <path d="M16 10H20" />
    <path d="M4 10H8" />
    <path d="M15 18L18 21" />
    <path d="M9 18L6 21" />
    <path d="M15 6L18 3" />
    <path d="M9 6L6 3" />
  </IconWrapper>
);

export const LightBulb = (props: IconProps) => (
  <IconWrapper id="rough-bulb" {...props}>
    <WatercolorFill d="M9 18H15" color={props.fillColor} />
    <path d="M9 18H15" stroke="none" />
    <path d="M12 2C8.13401 2 5 5.13401 5 9C5 11.5 6.5 13.5 8 15H16C17.5 13.5 19 11.5 19 9C19 5.13401 15.866 2 12 2Z" fill="none" />
    <path d="M9 18H15" />
    <path d="M10 21H14" />
  </IconWrapper>
);

export const QuestionMark = (props: IconProps) => (
  <IconWrapper id="rough-question" {...props}>
    <path d="M7.9 8.08C7.9 8.08 8.5 6 12 6C15.5 6 16 9 16 9.5C16 12 12 13 12 13V15" fill="none" />
    <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
  </IconWrapper>
);

export const GraduationCap = (props: IconProps) => (
  <IconWrapper id="rough-grad" {...props}>
    <WatercolorFill d="M22 10L12 5L2 10L12 15L22 10Z" color={props.fillColor} />
    <path d="M22 10L12 5L2 10L12 15L22 10Z" fill="none" />
    <path d="M6 12V17C6 17 8 19 12 19C16 19 18 17 18 17V12" fill="none" />
    <path d="M22 10V16" />
  </IconWrapper>
);

export const MapPin = (props: IconProps) => (
  <IconWrapper id="rough-pin" {...props}>
    <WatercolorFill d="M12 22C12 22 20 16 20 10C20 5 16 2 12 2C8 2 4 5 4 10C4 16 12 22 12 22Z" color={props.fillColor} />
    <path d="M12 22C12 22 20 16 20 10C20 5 16 2 12 2C8 2 4 5 4 10C4 16 12 22 12 22Z" fill="none" />
    <circle cx="12" cy="10" r="3" fill="none" />
  </IconWrapper>
);

export const Book = (props: IconProps) => (
  <IconWrapper id="rough-book" {...props}>
    <path d="M4 19.5C4 18.837 4.53726 18.3 5.2 18.3H19.2C19.6418 18.3 20 17.9418 20 17.5V5C20 4.44772 19.5523 4 19 4H6C4.89543 4 4 4.89543 4 6V19.5Z" fill="none" />
    <path d="M4 6C4 4.89543 4.89543 4 6 4H19" />
    <path d="M6 18.3C5.33726 18.3 4.8 18.837 4.8 19.5C4.8 20.163 5.33726 20.7 6 20.7H19" />
  </IconWrapper>
);

export const Bell = (props: IconProps) => (
  <IconWrapper id="rough-bell" {...props}>
    <WatercolorFill d="M18 8C18 6 16 3 12 3C8 3 6 6 6 8C6 11 5 13 4 15H20C19 13 18 11 18 8Z" color={props.fillColor} />
    <path d="M18 8C18 6 16 3 12 3C8 3 6 6 6 8C6 11 5 13 4 15H20C19 13 18 11 18 8Z" fill="none" />
    <path d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18" />
  </IconWrapper>
);

export const UserPlus = (props: IconProps) => (
  <IconWrapper id="rough-userplus" {...props}>
    <path d="M5 20V19C5 15.134 8.13401 12 12 12V12" fill="none" />
    <circle cx="12" cy="7" r="4" fill="none" />
    <path d="M18 15V21" />
    <path d="M15 18H21" />
  </IconWrapper>
);

export const Mail = (props: IconProps) => (
  <IconWrapper id="rough-mail" {...props}>
    <WatercolorFill d="M2 7L12 14L22 7" color={props.fillColor} />
    <path d="M2 7L12 14L22 7" stroke="none" />
    <rect x="2" y="5" width="20" height="14" rx="2" fill="none" />
    <path d="M2 7L12 14L22 7" fill="none" />
  </IconWrapper>
);

export const Check = (props: IconProps) => (
  <IconWrapper id="rough-check" {...props}>
    <path d="M5 13L9 17L19 7" fill="none" />
  </IconWrapper>
);

export const Xmark = (props: IconProps) => (
  <IconWrapper id="rough-xmark" {...props}>
    <path d="M6 6L18 18" fill="none" />
    <path d="M18 6L6 18" fill="none" />
  </IconWrapper>
);

export const Shield = (props: IconProps) => (
  <IconWrapper id="rough-shield" {...props}>
    <WatercolorFill d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" color={props.fillColor} />
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="none" />
  </IconWrapper>
);

export const Clock = (props: IconProps) => (
  <IconWrapper id="rough-clock" {...props}>
    <circle cx="12" cy="12" r="9" fill="none" />
    <path d="M12 7V12L15 15" fill="none" />
  </IconWrapper>
);

export const Group = (props: IconProps) => (
  <IconWrapper id="rough-group" {...props}>
    <circle cx="9" cy="9" r="4" fill="none" />
    <path d="M2 21V19C2 16 5 15 9 15" fill="none" />
    <path d="M16 8C16 8 18 9 18 11" fill="none" />
    <path d="M22 21V19C22 17 20 16 17 16" fill="none" />
  </IconWrapper>
);

export const FireFlame = (props: IconProps) => (
  <IconWrapper id="rough-fire" {...props}>
    <WatercolorFill d="M12 21.5C16.5 21.5 19.5 17.5 19.5 12.5C19.5 8.5 16 5 12 2.5C8 5 4.5 8.5 4.5 12.5C4.5 17.5 7.5 21.5 12 21.5Z" color={props.fillColor} />
    <path d="M12 21.5C16.5 21.5 19.5 17.5 19.5 12.5C19.5 8.5 16 5 12 2.5C8 5 4.5 8.5 4.5 12.5C4.5 17.5 7.5 21.5 12 21.5Z" fill="none" />
    <path d="M12 18C14 18 15.5 16 15.5 13.5C15.5 11.5 12 9.5 12 9.5C12 9.5 8.5 11.5 8.5 13.5C8.5 16 10 18 12 18Z" fill="none" />
  </IconWrapper>
);

export const ArrowRight = (props: IconProps) => (
  <IconWrapper id="rough-arrow-right" {...props}>
    <path d="M5 12H19" fill="none" />
    <path d="M13 18L19 12L13 6" fill="none" />
  </IconWrapper>
);

export const MediaImage = (props: IconProps) => (
  <IconWrapper id="rough-image" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" />
    <path d="M3 16L8 11L13 16L16 13L21 18" fill="none" />
    <circle cx="8" cy="7" r="1.5" fill="none" />
  </IconWrapper>
);

export const ArrowLeft = (props: IconProps) => (
  <IconWrapper id="rough-arrow-left" {...props}>
    <path d="M19 12H5" fill="none" />
    <path d="M11 18L5 12L11 6" fill="none" />
  </IconWrapper>
);

export const Search = (props: IconProps) => (
  <IconWrapper id="rough-search" {...props}>
    <circle cx="11" cy="11" r="7" fill="none" />
    <path d="M20 20L16 16" fill="none" />
  </IconWrapper>
);

export const MoreVert = (props: IconProps) => (
  <IconWrapper id="rough-more-vert" {...props}>
    <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
  </IconWrapper>
);

export const Trash = (props: IconProps) => (
  <IconWrapper id="rough-trash" {...props}>
    <path d="M3 6H21" fill="none" />
    <path d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6" fill="none" />
    <path d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6" fill="none" />
    <path d="M10 11V17" />
    <path d="M14 11V17" />
  </IconWrapper>
);

export const EmptyPage = (props: IconProps) => (
  <IconWrapper id="rough-empty-page" {...props}>
    <path d="M4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2H6C4.89543 2 4 2.89543 4 4Z" fill="none" />
    <path d="M14 2V8H20" fill="none" />
  </IconWrapper>
);

export const Download = (props: IconProps) => (
  <IconWrapper id="rough-download" {...props}>
    <path d="M12 3V16" fill="none" />
    <path d="M6 10L12 16L18 10" fill="none" />
    <path d="M6 21H18" fill="none" />
  </IconWrapper>
);

export const Hashtag = (props: IconProps) => (
  <IconWrapper id="rough-hashtag" {...props}>
    <path d="M10 3L8 21" fill="none" />
    <path d="M16 3L14 21" fill="none" />
    <path d="M3.5 9H21.5" fill="none" />
    <path d="M2.5 15H20.5" fill="none" />
  </IconWrapper>
);

export const EditPencil = (props: IconProps) => (
  <IconWrapper id="rough-edit" {...props}>
    <path d="M12 20H21" fill="none" />
    <path d="M16.5 3.5C16.5 3.5 19.5 6.5 19.5 6.5C20.5 7.5 20.5 8.5 19.5 9.5L7 22L2 22L2 17L14.5 4.5C15.5 3.5 16.5 3.5 16.5 3.5Z" fill="none" />
  </IconWrapper>
);

export const LogOut = (props: IconProps) => (
  <IconWrapper id="rough-logout" {...props}>
    <path d="M12 20H5C4 20 3 19 3 18V6C3 5 4 4 5 4H12" fill="none" />
    <path d="M16 17L21 12L16 7" fill="none" />
    <path d="M21 12H9" fill="none" />
  </IconWrapper>
);

export const Eye = (props: IconProps) => (
  <IconWrapper id="rough-eye" {...props}>
    <path d="M3 12C3 12 6 5 12 5C18 5 21 12 21 12C21 12 18 19 12 19C6 19 3 12 3 12Z" fill="none" />
    <circle cx="12" cy="12" r="3" fill="none" />
  </IconWrapper>
);

export const Settings = (props: IconProps) => (
  <IconWrapper id="rough-settings" {...props}>
    <circle cx="12" cy="12" r="3" fill="none" />
    <path d="M19.4 15C19.6 14.1 19.8 13.1 19.8 12C19.8 10.9 19.6 9.9 19.4 9L21.5 7.5C21.7 7.3 21.8 7 21.6 6.7L19.6 3.3C19.5 3 19.2 2.9 18.9 3L16.4 4C15.6 3.4 14.7 2.9 13.8 2.5L13.4 0H9.4L9 2.5C8.1 2.9 7.2 3.4 6.4 4L3.9 3C3.6 2.9 3.3 3 3.2 3.3L1.2 6.7C1 7 1.1 7.3 1.3 7.5L3.4 9C3.2 9.9 3 10.9 3 12C3 13.1 3.2 14.1 3.4 15L1.3 16.5C1.1 16.7 1 17 1.2 17.3L3.2 20.7C3.3 21 3.6 21.1 3.9 21L6.4 20C7.2 20.6 8.1 21.1 9 21.5L9.4 24H13.4L13.8 21.5C14.7 21.1 15.6 20.6 16.4 20L18.9 21C19.2 21.1 19.5 21 19.6 20.7L21.6 17.3C21.8 17 21.7 16.7 21.5 16.5L19.4 15Z" fill="none" />
  </IconWrapper>
);

export const WarningTriangle = (props: IconProps) => (
  <IconWrapper id="rough-warning" {...props}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none" />
    <path d="M12 8V13" />
    <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
  </IconWrapper>
);

export const Bag = (props: IconProps) => (
  <IconWrapper id="rough-bag" {...props}>
    <path d="M6 8H18V20C18 21 17 22 16 22H8C7 22 6 21 6 20V8Z" fill="none" />
    <path d="M9 8V6C9 4.5 10.5 3 12 3C13.5 3 15 4.5 15 6V8" fill="none" />
  </IconWrapper>
);

export const FloppyDisk = (props: IconProps) => (
  <IconWrapper id="rough-floppy" {...props}>
    <path d="M4 4H20V20H4V4Z" fill="none" />
    <path d="M8 4V8H16V4" fill="none" />
    <path d="M8 20V14H16V20" fill="none" />
  </IconWrapper>
);

export const Plus = (props: IconProps) => (
  <IconWrapper id="rough-plus" {...props}>
    <path d="M12 5V19" fill="none" />
    <path d="M5 12H19" fill="none" />
  </IconWrapper>
);

export const WarningCircle = (props: IconProps) => (
  <IconWrapper id="rough-warning-circle" {...props}>
    <circle cx="12" cy="12" r="10" fill="none" />
    <path d="M12 7V13" />
    <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
  </IconWrapper>
);

export const RefreshDouble = (props: IconProps) => (
  <IconWrapper id="rough-refresh" {...props}>
    <path d="M21 10C21 10 19 4 12 4C5 4 2 10 2 10" fill="none" />
    <path d="M3 14C3 14 5 20 12 20C19 20 22 14 22 14" fill="none" />
    <path d="M17 4V10H22" fill="none" />
    <path d="M7 20V14H2" fill="none" />
  </IconWrapper>
);

export const UserXmark = (props: IconProps) => (
  <IconWrapper id="rough-user-x" {...props}>
    <path d="M5 20V19C5 15.134 8.13401 12 12 12V12" fill="none" />
    <circle cx="12" cy="7" r="4" fill="none" />
    <path d="M17 17L21 21" />
    <path d="M21 17L17 21" />
  </IconWrapper>
);

export const Compass = (props: IconProps) => (
  <IconWrapper id="rough-compass" {...props}>
    <circle cx="12" cy="12" r="10" fill="none" />
    <path d="M10.5 13.5L16 8L13.5 13.5L8 16L10.5 13.5Z" fill="none" />
  </IconWrapper>
);

export const User = (props: IconProps) => (
  <IconWrapper id="rough-user" {...props}>
    <path d="M5 20V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V20" fill="none" />
    <circle cx="12" cy="7" r="4" fill="none" />
  </IconWrapper>
);

export const Megaphone = (props: IconProps) => (
  <IconWrapper id="rough-megaphone" {...props}>
    <path d="M2 9H5L12 4V20L5 15H2V9Z" fill="none" />
    <path d="M16 9C16 9 18 10 18 12C18 14 16 15 16 15" fill="none" />
    <path d="M19 7C19 7 22 9 22 12C22 15 19 17 19 17" fill="none" />
  </IconWrapper>
);

export const NavArrowLeft = (props: IconProps) => (
  <IconWrapper id="rough-nav-left" {...props}>
    <path d="M15 6L9 12L15 18" fill="none" />
  </IconWrapper>
);

export const NavArrowRight = (props: IconProps) => (
  <IconWrapper id="rough-nav-right" {...props}>
    <path d="M9 6L15 12L9 18" fill="none" />
  </IconWrapper>
);

export const Lock = (props: IconProps) => (
  <IconWrapper id="rough-lock" {...props}>
    <rect x="5" y="11" width="14" height="10" rx="2" fill="none" />
    <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" fill="none" />
  </IconWrapper>
);

export const Filter = (props: IconProps) => (
  <IconWrapper id="rough-filter" {...props}>
    <WatercolorFill d="M3 6H21L14 14V20L10 22V14L3 6Z" color={props.fillColor} />
    <path d="M3 6H21L14 14V20L10 22V14L3 6Z" fill="none" />
  </IconWrapper>
);

export const School = (props: IconProps) => (
  <IconWrapper id="rough-school" {...props}>
    <WatercolorFill d="M2 22H22M2 10L12 4L22 10V22H2V10Z" color={props.fillColor} />
    <path d="M2 22H22" fill="none" />
    <path d="M2 10L12 4L22 10V22H2V10Z" fill="none" />
    <path d="M6 10V22" fill="none" />
    <path d="M18 10V22" fill="none" />
    <rect x="9" y="14" width="6" height="8" fill="none" />
  </IconWrapper>
);

export const Calendar = (props: IconProps) => (
  <IconWrapper id="rough-calendar" {...props}>
    <WatercolorFill d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" color={props.fillColor} />
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" fill="none" />
    <path d="M16 2V6" fill="none" />
    <path d="M8 2V6" fill="none" />
    <path d="M3 10H21" fill="none" />
  </IconWrapper>
);

export const Globe = (props: IconProps) => (
  <IconWrapper id="rough-globe" {...props}>
    <WatercolorFill d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" color={props.fillColor} />
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none" />
    <path d="M2 12H22" fill="none" />
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" fill="none" />
  </IconWrapper>
);

export const Linkedin = (props: IconProps) => (
  <IconWrapper id="rough-linkedin" {...props}>
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="none" />
    <path d="M6 9H2V21H6V9Z" fill="none" />
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="none" />
  </IconWrapper>
);

export const Camera = (props: IconProps) => (
  <IconWrapper id="rough-camera" {...props}>
    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" fill="none" />
    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" fill="none" />
  </IconWrapper>
);

export const CheckCircle = (props: IconProps) => (
  <IconWrapper id="rough-check-circle" {...props}>
    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" fill="none" />
    <path d="M22 4L12 14.01L9 11.01" fill="none" />
  </IconWrapper>
);

export const AlertCircle = (props: IconProps) => (
  <IconWrapper id="rough-alert-circle" {...props}>
    <circle cx="12" cy="12" r="10" fill="none" />
    <path d="M12 8V12" fill="none" />
    <path d="M12 16H12.01" fill="none" />
  </IconWrapper>
);

export const EyeOff = (props: IconProps) => (
  <IconWrapper id="rough-eye-off" {...props}>
    <path d="M17.94 17.94L1 1" fill="none" />
    <path d="M1 1L23 23" fill="none" />
    <path d="M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19" fill="none" />
    <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.1435 13.1984C8.9926 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02087 11.2218 9.18485 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88" fill="none" />
    <path d="M1 12C1 12 5 20 12 20C13.24 20 14.44 19.66 15.56 19.03" fill="none" />
  </IconWrapper>
);

export const BookOpen = (props: IconProps) => (
  <IconWrapper id="rough-book-open" {...props}>
    <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" fill="none" />
    <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" fill="none" />
  </IconWrapper>
);

export const UserMinus = (props: IconProps) => (
  <IconWrapper id="rough-userminus" {...props}>
    <path d="M5 20V19C5 15.134 8.13401 12 12 12V12" fill="none" />
    <circle cx="12" cy="7" r="4" fill="none" />
    <path d="M16 19H22" fill="none" />
  </IconWrapper>
);

export const Spinner = (props: IconProps) => (
  <IconWrapper id="rough-spinner" {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" />
  </IconWrapper>
);
