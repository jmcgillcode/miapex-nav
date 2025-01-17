const icons = {
    'outlook-plus': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M19 8v6m-3-3h6"/>
    </svg>`,
    'outlook-login': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
        <polyline points="10 17 15 12 10 7"/>
        <line x1="15" y1="12" x2="3" y2="12"/>
    </svg>`,
    'outlook-home': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>`,
    'outlook-lock': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`,
    'users': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
    'settings': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>`,
    'globe': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`,
    'outlook': `<svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="2" width="20" height="28" rx="2" fill="#1066B5"></rect>
      <rect x="10" y="2" width="20" height="28" rx="2" fill="url(#paint0_linear_87_7742)"></rect>
      <rect x="10" y="5" width="10" height="10" fill="#32A9E7"></rect>
      <rect x="10" y="15" width="10" height="10" fill="#167EB4"></rect>
      <rect x="20" y="15" width="10" height="10" fill="#32A9E7"></rect>
      <rect x="20" y="5" width="10" height="10" fill="#58D9FD"></rect>
      <mask id="mask0_87_7742" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="14" width="24" height="16">
      <path d="M8 14H30C31.1046 14 32 14.8954 32 16V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V14Z" fill="url(#paint1_linear_87_7742)"></path>
      </mask>
      <g mask="url(#mask0_87_7742)">
      <path d="M32 14V18H30V14H32Z" fill="#135298"></path>
      <path d="M32 30V16L7 30H32Z" fill="url(#paint2_linear_87_7742)"></path>
      <path d="M8 30V16L33 30H8Z" fill="url(#paint3_linear_87_7742)"></path>
      </g>
      <path d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z" fill="#000000" fill-opacity="0.3"></path>
      <rect y="7" width="18" height="18" rx="2" fill="url(#paint4_linear_87_7742)"></rect>
      <path d="M14 16.0693V15.903C14 13.0222 11.9272 11 9.01582 11C6.08861 11 4 13.036 4 15.9307V16.097C4 18.9778 6.07278 21 9 21C11.9114 21 14 18.964 14 16.0693ZM11.6424 16.097C11.6424 18.0083 10.5665 19.1579 9.01582 19.1579C7.46519 19.1579 6.37342 17.9806 6.37342 16.0693V15.903C6.37342 13.9917 7.44937 12.8421 9 12.8421C10.5348 12.8421 11.6424 14.0194 11.6424 15.9307V16.097Z" fill="white"></path>
      <defs>
      <linearGradient id="paint0_linear_87_7742" x1="10" y1="16" x2="30" y2="16" gradientUnits="userSpaceOnUse">
      <stop stop-color="#064484"></stop>
      <stop offset="1" stop-color="#0F65B5"></stop>
      </linearGradient>
      <linearGradient id="paint1_linear_87_7742" x1="8" y1="26.7692" x2="32" y2="26.7692" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1B366F"></stop>
      <stop offset="1" stop-color="#2657B0"></stop>
      </linearGradient>
      <linearGradient id="paint2_linear_87_7742" x1="32" y1="23" x2="8" y2="23" gradientUnits="userSpaceOnUse">
      <stop stop-color="#44DCFD"></stop>
      <stop offset="0.453125" stop-color="#259ED0"></stop>
      </linearGradient>
      <linearGradient id="paint3_linear_87_7742" x1="8" y1="23" x2="32" y2="23" gradientUnits="userSpaceOnUse">
      <stop stop-color="#259ED0"></stop>
      <stop offset="1" stop-color="#44DCFD"></stop>
      </linearGradient>
      <linearGradient id="paint4_linear_87_7742" x1="0" y1="16" x2="18" y2="16" gradientUnits="userSpaceOnUse">
      <stop stop-color="#064484"></stop>
      <stop offset="1" stop-color="#0F65B5"></stop>
      </linearGradient>
      </defs>
      </svg>`,
    'mi': `<svg width="28px" height="28px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
         <circle cx="512" cy="512" r="512" style="fill:#ff6900"></circle>
         <path d="M512 256c-85 0-154.54 5.44-202.82 53.67S256 427.37 256 512.26s4.91 154.35 53.21 202.6S427 768 512 768s154.52-4.91 202.79-53.14S768 597.12 768 512.26s-5-154.52-53.38-202.75S596.86 256 512 256zM360.66 414h120c31.36 0 64.15 1.45 80.3 17.64 15.91 15.91 17.64 47.64 17.71 78.42v96.85a3.2 3.2 0 0 1-3.27 3.09h-41.53a3.2 3.2 0 0 1-3.24-3.16v-98.5c0-17.19-1-34.86-9.9-43.75-7.64-7.68-21.89-9.41-36.69-9.77H408.7a3.2 3.2 0 0 0-3.22 3.14v148.93a3.2 3.2 0 0 1-3.24 3.16h-41.58a3.2 3.2 0 0 1-3.2-3.16V417.15a3.2 3.2 0 0 1 3.2-3.15zm258.79 0H661a3.2 3.2 0 0 1 3.2 3.2v189.7a3.2 3.2 0 0 1-3.2 3.1h-41.54a3.2 3.2 0 0 1-3.22-3.16V417.15a3.2 3.2 0 0 1 3.22-3.18zm-173.16 75.56h43.65a3.17 3.17 0 0 1 3.2 3.14v114.17a3.2 3.2 0 0 1-3.2 3.16h-43.65a3.2 3.2 0 0 1-3.24-3.16V492.69a3.2 3.2 0 0 1 3.24-3.13z" style="fill:#fff"></path>
      </svg>`,
    'mail': `<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M168.8 224h-8.4c-35.3 0-64 28.7-64 64v56.3c0.9-2.2 1.8-4.5 2.8-6.7 17.5-41.4 40.9-79.4 69.6-113.6zM96.5 679.7V736c0 35.3 28.7 64 64 64h8.4c-28.8-34.2-52.1-72.3-69.6-113.7-1-2.1-1.9-4.4-2.8-6.6z" fill="#FFEA00"/><path d="M863.5 224H258.3C178.5 294.4 128 397.4 128 512s50.5 217.6 130.3 288h605.1c35.3 0 64-28.7 64-64V288c0.1-35.4-28.5-64-63.9-64z" fill="#536DFE"/><path d="M125.1 289.7L512 673.6l382.6-385.5L512 543.9zM717.9 836.2c-14.9 9.5-19.3 29.3-9.8 44.2 6.1 9.6 16.4 14.8 27 14.8 5.9 0 11.8-1.6 17.2-5C791 865.6 825.7 835 855.1 800h-89c-15 13.2-31.1 25.3-48.2 36.2zM927.5 344.1v335.5c21.3-53 32.5-110 32.5-167.6 0-58.4-11.1-115.1-32.5-167.9z" fill="#FFEA00"/><path d="M774.3 148.8c-38-27.5-79.9-48.8-124.3-63.1C605.5 71.3 559.1 64 512 64c-60.5 0-119.1 11.8-174.4 35.2-53.4 22.6-101.3 54.9-142.4 96-9.2 9.2-18 18.8-26.4 28.7-28.8 34.2-52.1 72.3-69.6 113.7-0.9 2.2-1.9 4.4-2.8 6.7C74.9 397.6 64 454 64 512s10.9 114.4 32.5 167.7c0.9 2.2 1.8 4.5 2.8 6.7 17.5 41.4 40.8 79.5 69.6 113.7 8.3 9.9 17.1 19.5 26.4 28.7 41.1 41.1 89 73.4 142.4 96C392.9 948.2 451.5 960 512 960c23.1 0 46.3-1.8 69-5.3 17.5-2.7 29.4-19 26.7-36.5s-19.1-29.4-36.5-26.7c-19.5 3-39.4 4.5-59.2 4.5-97.1 0-186-36.3-253.7-96C178.5 729.6 128 626.6 128 512s50.5-217.6 130.3-288c67.7-59.7 156.5-96 253.7-96 40.4 0 80.2 6.2 118.3 18.6 51.5 16.6 97.4 43.3 136.1 77.4h88.7c-23.7-28.3-50.8-53.5-80.8-75.2z" fill="#FFEA00"/><path d="M96.5 288v56.3c0.9-2.2 1.8-4.5 2.8-6.7 17.5-41.4 40.8-79.5 69.6-113.7h-8.4c-35.4 0.1-64 28.7-64 64.1zM160.5 800h8.4c-28.8-34.2-52.1-72.3-69.6-113.7-0.9-2.2-1.9-4.4-2.8-6.7V736c0 35.4 28.6 64 64 64zM177.3 324L512 543.9l182.9-122.3c-15.2-74.2-48.8-141.8-95.8-197.7H258.3c-32.3 28.5-59.7 62.3-81 100.1z" fill="#8C9EFF"/><path d="M703 481.2L512 673.6 171.1 335.4C143.6 388.3 128 448.3 128 512c0 114.6 50.5 217.6 130.3 288h340.8C664.6 722.2 704 621.7 704 512c0-10.3-0.4-20.6-1-30.8z" fill="#8C9EFF"/><path d="M177.3 324c-2.1 3.8-4.2 7.6-6.2 11.4L512 673.6l191-192.4c-1.4-20.3-4.1-40.2-8.1-59.6L512 543.9 177.3 324z" fill="#FFFF00"/><path d="M128 512c0-63.7 15.6-123.7 43.1-176.6 2-3.8 4-7.6 6.2-11.4 21.3-37.7 48.8-71.6 81.1-100 62.1-54.8 142-89.8 229.8-95.2a446.34 446.34 0 0 0-104.1-46.2c-15.7 4.7-31.2 10.2-46.4 16.7-53.4 22.6-101.3 54.9-142.4 96-9.2 9.2-18 18.8-26.4 28.7-28.8 34.2-52.1 72.3-69.6 113.7-0.9 2.2-1.9 4.4-2.8 6.7C74.9 397.6 64 454 64 512s10.9 114.4 32.5 167.7c0.9 2.2 1.8 4.5 2.8 6.7 17.5 41.4 40.8 79.5 69.6 113.7 8.3 9.9 17.1 19.5 26.4 28.7 41.1 41.1 89 73.4 142.4 96 15.2 6.4 30.7 12 46.4 16.7 36.9-11 71.9-26.6 104.1-46.2-87.8-5.4-167.7-40.4-229.8-95.2C178.5 729.6 128 626.6 128 512z" fill="#FFFF00"/></svg>`,
    'mail-disposablemail': `<svg xmlns="http://www.w3.org/2000/svg"xml:space="preserve"width="154px"height="154px"version="1.1"style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 17 17"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[.fil0{fill:black}.fil1{fill:#FF6600}]]></style></defs><g id="Vrstva_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"/><g id="_636732048"><polygon class="fil0"points="0,17 17,17 17,5 16,5 9,10 0,5 0,5 0,0 0,0 "/><polygon class="fil1"points="16,4 9,8 0,4 0,4 0,0 17,0 17,4 "/></g></g></svg>`,
    'clock': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
    </svg>`,
    'shield': `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`
}
