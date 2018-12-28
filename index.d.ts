// Type definitions for Vue-Multislect 2.1.0
// Definitions by: Akshay Jat https://github.com/akki-jat

import Vue from 'vue';

declare class Multiselect extends Vue { }
declare class multiselectMixin extends Vue { }
declare class pointerMixin extends Vue { }
declare class localizationMixin extends Vue { }

declare class Localizer {
    static userLanguage;
    static langData;
    static setLanguage(userLanguage: string, langData?:{}): void;
    static translate(key: string): string;
}

export default Multiselect;
export { Multiselect, multiselectMixin, pointerMixin, localizationMixin, Localizer };