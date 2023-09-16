import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings2: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  dashboard: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M14.0756 0H17.4616C18.8639 0 20.0001 1.14585 20.0001 2.55996V5.97452C20.0001 7.38864 18.8639 8.53449 17.4616 8.53449H14.0756C12.6734 8.53449 11.5371 7.38864 11.5371 5.97452V2.55996C11.5371 1.14585 12.6734 0 14.0756 0Z"
        fill="#8692A6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z"
        fill="#8692A6"
      />
    </svg>
  ),
  requests: ({ ...props }: LucideProps) => (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M13.191 0H4.81C1.77 0 0 1.78 0 4.83V15.16C0 18.26 1.77 20 4.81 20H13.191C16.28 20 18 18.26 18 15.16V4.83C18 1.78 16.28 0 13.191 0Z"
        fill="#8692A6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.08094 4.6499V4.6599C4.64994 4.6599 4.30094 5.0099 4.30094 5.4399C4.30094 5.8699 4.64994 6.2199 5.08094 6.2199H8.06994C8.50094 6.2199 8.85094 5.8699 8.85094 5.4289C8.85094 4.9999 8.50094 4.6499 8.06994 4.6499H5.08094ZM12.9209 10.7399H5.08094C4.64994 10.7399 4.30094 10.3899 4.30094 9.9599C4.30094 9.5299 4.64994 9.1789 5.08094 9.1789H12.9209C13.3509 9.1789 13.7009 9.5299 13.7009 9.9599C13.7009 10.3899 13.3509 10.7399 12.9209 10.7399ZM12.9209 15.3099H5.08094C4.78094 15.3499 4.49094 15.1999 4.33094 14.9499C4.17094 14.6899 4.17094 14.3599 4.33094 14.1099C4.49094 13.8499 4.78094 13.7099 5.08094 13.7399H12.9209C13.3199 13.7799 13.6209 14.1199 13.6209 14.5299C13.6209 14.9289 13.3199 15.2699 12.9209 15.3099Z"
        fill="#8692A6"
      />
    </svg>
  ),
  actors: ({ ...props }: LucideProps) => (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.997 13.1743C3.684 13.1743 0 13.8543 0 16.5743C0 19.2953 3.661 19.9993 7.997 19.9993C12.31 19.9993 15.994 19.3203 15.994 16.5993C15.994 13.8783 12.334 13.1743 7.997 13.1743Z"
        fill="#8692A6"
      />
      <path
        opacity="0.4"
        d="M7.99708 10.5835C10.9351 10.5835 13.2891 8.22851 13.2891 5.29151C13.2891 2.35451 10.9351 -0.000488281 7.99708 -0.000488281C5.06008 -0.000488281 2.70508 2.35451 2.70508 5.29151C2.70508 8.22851 5.06008 10.5835 7.99708 10.5835Z"
        fill="#8692A6"
      />
    </svg>
  ),
  community: ({ ...props }: LucideProps) => (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.9488 10.54C7.49884 10.54 4.58789 11.1038 4.58789 13.2795C4.58789 15.4562 7.51765 16.0001 10.9488 16.0001C14.3988 16.0001 17.3098 15.4364 17.3098 13.2606C17.3098 11.084 14.38 10.54 10.9488 10.54Z"
        fill="#8692A6"
      />
      <path
        opacity="0.4"
        d="M10.9495 8.46703C13.2856 8.46703 15.1588 6.58307 15.1588 4.23351C15.1588 1.88306 13.2856 0 10.9495 0C8.61342 0 6.74023 1.88306 6.74023 4.23351C6.74023 6.58307 8.61342 8.46703 10.9495 8.46703Z"
        fill="#8692A6"
      />
      <path
        opacity="0.4"
        d="M20.0886 5.21923C20.693 2.84176 18.9209 0.706543 16.6645 0.706543C16.4192 0.706543 16.1846 0.73356 15.9554 0.779488C15.9249 0.786692 15.8909 0.802002 15.873 0.829019C15.8524 0.86324 15.8676 0.909168 15.89 0.938886C16.5678 1.89528 16.9573 3.0597 16.9573 4.30967C16.9573 5.50741 16.6001 6.6241 15.9733 7.55077C15.9088 7.64623 15.9661 7.77501 16.0798 7.79482C16.2374 7.82274 16.3986 7.83715 16.5634 7.84165C18.2064 7.88488 19.6811 6.82132 20.0886 5.21923Z"
        fill="#8692A6"
      />
      <path
        d="M21.8094 10.817C21.5086 10.1722 20.7824 9.72999 19.6783 9.51295C19.1572 9.38507 17.747 9.20496 16.4352 9.22928C16.4155 9.23198 16.4048 9.24549 16.403 9.25449C16.4003 9.2671 16.4057 9.28871 16.4316 9.30222C17.0378 9.60391 19.3811 10.916 19.0865 13.6834C19.074 13.8032 19.1698 13.9068 19.2888 13.8888C19.8655 13.8059 21.3492 13.4853 21.8094 12.4866C22.0637 11.9589 22.0637 11.3456 21.8094 10.817Z"
        fill="#8692A6"
      />
      <path
        opacity="0.4"
        d="M6.04508 0.779976C5.81675 0.733147 5.58126 0.707031 5.33592 0.707031C3.0795 0.707031 1.3075 2.84225 1.91279 5.21972C2.31931 6.82181 3.79403 7.88536 5.4371 7.84214C5.60185 7.83763 5.76392 7.82232 5.92061 7.79531C6.03433 7.7755 6.09164 7.64672 6.02717 7.55126C5.40039 6.62368 5.04312 5.5079 5.04312 4.31016C5.04312 3.05928 5.43352 1.89486 6.11134 0.939375C6.13283 0.909656 6.14894 0.863728 6.12745 0.829507C6.10954 0.80159 6.07642 0.787181 6.04508 0.779976Z"
        fill="#8692A6"
      />
      <path
        d="M2.32156 9.5127C1.21752 9.72973 0.492248 10.1719 0.191392 10.8167C-0.0637974 11.3453 -0.0637974 11.9586 0.191392 12.4872C0.651629 13.4851 2.13531 13.8066 2.71195 13.8885C2.83104 13.9065 2.92595 13.8038 2.91342 13.6832C2.61883 10.9167 4.9621 9.60456 5.56918 9.30287C5.59425 9.28846 5.59962 9.26775 5.59694 9.25424C5.59515 9.24523 5.5853 9.23173 5.5656 9.22992C4.25294 9.20471 2.84358 9.38482 2.32156 9.5127Z"
        fill="#8692A6"
      />
    </svg>
  ),
  payments: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z"
        fill="#8692A6"
      />
      <path
        opacity="0.4"
        d="M14.0374 9.29657C14.2465 10.2478 15.0805 10.917 16.0326 10.8996H19.2825C19.6787 10.8996 20 10.5715 20 10.166V7.63439C19.9991 7.22973 19.6787 6.90077 19.2825 6.8999H15.9561C14.8731 6.90338 13.9983 7.80235 14 8.91018C14 9.03985 14.0128 9.16951 14.0374 9.29657Z"
        fill="#8692A6"
      />
      <circle cx="16" cy="8.8999" r="1" fill="#8692A6" />
    </svg>
  ),
  settings: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.0117 12.8299C8.40726 12.8299 7.10938 11.5799 7.10938 10.0099C7.10938 8.43993 8.40726 7.17993 10.0117 7.17993C11.6162 7.17993 12.8834 8.43993 12.8834 10.0099C12.8834 11.5799 11.6162 12.8299 10.0117 12.8299Z"
        fill="#8692A6"
      />
      <path
        opacity="0.4"
        d="M19.2301 12.37C19.036 12.07 18.76 11.77 18.4023 11.58C18.1162 11.44 17.9322 11.21 17.7687 10.94C17.2475 10.08 17.5541 8.95 18.4228 8.44C19.4447 7.87 19.7718 6.6 19.179 5.61L18.4943 4.43C17.9118 3.44 16.6344 3.09 15.6226 3.67C14.7233 4.15 13.5685 3.83 13.0473 2.98C12.8838 2.7 12.7918 2.4 12.8122 2.1C12.8429 1.71 12.7203 1.34 12.5363 1.04C12.1582 0.42 11.4735 0 10.7172 0H9.27627C8.53024 0.02 7.84553 0.42 7.4674 1.04C7.27323 1.34 7.16081 1.71 7.18125 2.1C7.20169 2.4 7.10972 2.7 6.9462 2.98C6.425 3.83 5.27019 4.15 4.38109 3.67C3.35913 3.09 2.09191 3.44 1.49917 4.43L0.814459 5.61C0.231943 6.6 0.55897 7.87 1.57071 8.44C2.43937 8.95 2.74596 10.08 2.23498 10.94C2.06125 11.21 1.87729 11.44 1.59115 11.58C1.24368 11.77 0.937094 12.07 0.773581 12.37C0.395456 12.99 0.415896 13.77 0.79402 14.42L1.49917 15.62C1.87729 16.26 2.58245 16.66 3.31825 16.66C3.66572 16.66 4.0745 16.56 4.40153 16.36C4.65702 16.19 4.96361 16.13 5.30085 16.13C6.31259 16.13 7.16081 16.96 7.18125 17.95C7.18125 19.1 8.12145 20 9.30692 20H10.6968C11.872 20 12.8122 19.1 12.8122 17.95C12.8429 16.96 13.6911 16.13 14.7029 16.13C15.0299 16.13 15.3365 16.19 15.6022 16.36C15.9292 16.56 16.3278 16.66 16.6855 16.66C17.411 16.66 18.1162 16.26 18.4943 15.62L19.2097 14.42C19.5776 13.75 19.6083 12.99 19.2301 12.37Z"
        fill="#8692A6"
      />
    </svg>
  ),
};
