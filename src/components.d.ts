/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';
import '@stencil/router';


import {
  AppRoot as AppRoot
} from './components/app-root/app-root';

declare global {
  interface HTMLAppRootElement extends AppRoot, HTMLStencilElement {
  }
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    "app-root": HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    "app-root": HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-root": JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageAboutPopover as PageAboutPopover
} from './components/page-about-popover/page-about-popover';

declare global {
  interface HTMLPageAboutPopoverElement extends PageAboutPopover, HTMLStencilElement {
  }
  var HTMLPageAboutPopoverElement: {
    prototype: HTMLPageAboutPopoverElement;
    new (): HTMLPageAboutPopoverElement;
  };
  interface HTMLElementTagNameMap {
    "page-about-popover": HTMLPageAboutPopoverElement;
  }
  interface ElementTagNameMap {
    "page-about-popover": HTMLPageAboutPopoverElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-about-popover": JSXElements.PageAboutPopoverAttributes;
    }
  }
  namespace JSXElements {
    export interface PageAboutPopoverAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageAbout as PageAbout
} from './components/page-about/page-about';

declare global {
  interface HTMLPageAboutElement extends PageAbout, HTMLStencilElement {
  }
  var HTMLPageAboutElement: {
    prototype: HTMLPageAboutElement;
    new (): HTMLPageAboutElement;
  };
  interface HTMLElementTagNameMap {
    "page-about": HTMLPageAboutElement;
  }
  interface ElementTagNameMap {
    "page-about": HTMLPageAboutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-about": JSXElements.PageAboutAttributes;
    }
  }
  namespace JSXElements {
    export interface PageAboutAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageLogin as PageLogin
} from './components/page-login/page-login';

declare global {
  interface HTMLPageLoginElement extends PageLogin, HTMLStencilElement {
  }
  var HTMLPageLoginElement: {
    prototype: HTMLPageLoginElement;
    new (): HTMLPageLoginElement;
  };
  interface HTMLElementTagNameMap {
    "page-login": HTMLPageLoginElement;
  }
  interface ElementTagNameMap {
    "page-login": HTMLPageLoginElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-login": JSXElements.PageLoginAttributes;
    }
  }
  namespace JSXElements {
    export interface PageLoginAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageMap as PageMap
} from './components/page-map/page-map';

declare global {
  interface HTMLPageMapElement extends PageMap, HTMLStencilElement {
  }
  var HTMLPageMapElement: {
    prototype: HTMLPageMapElement;
    new (): HTMLPageMapElement;
  };
  interface HTMLElementTagNameMap {
    "page-map": HTMLPageMapElement;
  }
  interface ElementTagNameMap {
    "page-map": HTMLPageMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-map": JSXElements.PageMapAttributes;
    }
  }
  namespace JSXElements {
    export interface PageMapAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageScheduleFilter as PageScheduleFilter
} from './components/page-schedule-filter/page-schedule-filter';

declare global {
  interface HTMLPageScheduleFilterElement extends PageScheduleFilter, HTMLStencilElement {
  }
  var HTMLPageScheduleFilterElement: {
    prototype: HTMLPageScheduleFilterElement;
    new (): HTMLPageScheduleFilterElement;
  };
  interface HTMLElementTagNameMap {
    "page-schedule-filter": HTMLPageScheduleFilterElement;
  }
  interface ElementTagNameMap {
    "page-schedule-filter": HTMLPageScheduleFilterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-schedule-filter": JSXElements.PageScheduleFilterAttributes;
    }
  }
  namespace JSXElements {
    export interface PageScheduleFilterAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageSchedule as PageSchedule
} from './components/page-schedule/page-schedule';

declare global {
  interface HTMLPageScheduleElement extends PageSchedule, HTMLStencilElement {
  }
  var HTMLPageScheduleElement: {
    prototype: HTMLPageScheduleElement;
    new (): HTMLPageScheduleElement;
  };
  interface HTMLElementTagNameMap {
    "page-schedule": HTMLPageScheduleElement;
  }
  interface ElementTagNameMap {
    "page-schedule": HTMLPageScheduleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-schedule": JSXElements.PageScheduleAttributes;
    }
  }
  namespace JSXElements {
    export interface PageScheduleAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageSession as PageSession
} from './components/page-session/page-session';

declare global {
  interface HTMLPageSessionElement extends PageSession, HTMLStencilElement {
  }
  var HTMLPageSessionElement: {
    prototype: HTMLPageSessionElement;
    new (): HTMLPageSessionElement;
  };
  interface HTMLElementTagNameMap {
    "page-session": HTMLPageSessionElement;
  }
  interface ElementTagNameMap {
    "page-session": HTMLPageSessionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-session": JSXElements.PageSessionAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSessionAttributes extends HTMLAttributes {
      goback?: string;
      sessionId?: string;
    }
  }
}


import {
  PageSpeakerDetail as PageSpeakerDetail
} from './components/page-speaker-detail/page-speaker-detail';

declare global {
  interface HTMLPageSpeakerDetailElement extends PageSpeakerDetail, HTMLStencilElement {
  }
  var HTMLPageSpeakerDetailElement: {
    prototype: HTMLPageSpeakerDetailElement;
    new (): HTMLPageSpeakerDetailElement;
  };
  interface HTMLElementTagNameMap {
    "page-speaker-detail": HTMLPageSpeakerDetailElement;
  }
  interface ElementTagNameMap {
    "page-speaker-detail": HTMLPageSpeakerDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-speaker-detail": JSXElements.PageSpeakerDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSpeakerDetailAttributes extends HTMLAttributes {
      speakerId?: string;
    }
  }
}


import {
  PageSpeakerList as PageSpeakerList
} from './components/page-speaker-list/page-speaker-list';

declare global {
  interface HTMLPageSpeakerListElement extends PageSpeakerList, HTMLStencilElement {
  }
  var HTMLPageSpeakerListElement: {
    prototype: HTMLPageSpeakerListElement;
    new (): HTMLPageSpeakerListElement;
  };
  interface HTMLElementTagNameMap {
    "page-speaker-list": HTMLPageSpeakerListElement;
  }
  interface ElementTagNameMap {
    "page-speaker-list": HTMLPageSpeakerListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-speaker-list": JSXElements.PageSpeakerListAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSpeakerListAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageSupport as PageSupport
} from './components/page-support/page-support';

declare global {
  interface HTMLPageSupportElement extends PageSupport, HTMLStencilElement {
  }
  var HTMLPageSupportElement: {
    prototype: HTMLPageSupportElement;
    new (): HTMLPageSupportElement;
  };
  interface HTMLElementTagNameMap {
    "page-support": HTMLPageSupportElement;
  }
  interface ElementTagNameMap {
    "page-support": HTMLPageSupportElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-support": JSXElements.PageSupportAttributes;
    }
  }
  namespace JSXElements {
    export interface PageSupportAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageTabs as PageTabs
} from './components/page-tabs/page-tabs';

declare global {
  interface HTMLPageTabsElement extends PageTabs, HTMLStencilElement {
  }
  var HTMLPageTabsElement: {
    prototype: HTMLPageTabsElement;
    new (): HTMLPageTabsElement;
  };
  interface HTMLElementTagNameMap {
    "page-tabs": HTMLPageTabsElement;
  }
  interface ElementTagNameMap {
    "page-tabs": HTMLPageTabsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-tabs": JSXElements.PageTabsAttributes;
    }
  }
  namespace JSXElements {
    export interface PageTabsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PageTutorial as PageTutorial
} from './components/page-tutorial/page-tutorial';

declare global {
  interface HTMLPageTutorialElement extends PageTutorial, HTMLStencilElement {
  }
  var HTMLPageTutorialElement: {
    prototype: HTMLPageTutorialElement;
    new (): HTMLPageTutorialElement;
  };
  interface HTMLElementTagNameMap {
    "page-tutorial": HTMLPageTutorialElement;
  }
  interface ElementTagNameMap {
    "page-tutorial": HTMLPageTutorialElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-tutorial": JSXElements.PageTutorialAttributes;
    }
  }
  namespace JSXElements {
    export interface PageTutorialAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
