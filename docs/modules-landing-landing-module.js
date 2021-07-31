(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-landing-landing-module"],{

/***/ "LYaK":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \*********************************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "lUod");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function CarouselComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectSlide(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r4.active === true);
} }
function CarouselComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
} }
function CarouselComponent_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.previousSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
} }
function CarouselComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
} }
const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = ["*"];
class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
/** @nocollapse */ CarouselConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CarouselConfig_Factory() { return new CarouselConfig(); }, token: CarouselConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    const out = [];
    /** @type {?} */
    const n = Math.ceil((array.length) / size);
    /** @type {?} */
    let i = 0;
    while (i < n) {
        /** @type {?} */
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Turn on/off animation. Animation doesn't work for multilist carousel
         */
        this.isAnimated = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active);
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        (slides) => {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            (slide, index) => slide.item.order = index));
        });
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this.isAnimated) {
            slide.isAnimated = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._select(nextSlideIndex);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            () => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }), 0);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    move(direction, force = false) {
        /** @type {?} */
        const firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        const lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    keydownPress(event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    isFirst(index) {
        return index === 0;
    }
    /**
     * @return {?}
     */
    indicatorsSlides() {
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0));
    }
    /**
     * @private
     * @return {?}
     */
    selectInitialSlides() {
        /** @type {?} */
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * @private
     * @return {?}
     */
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => {
            return {
                index,
                item: slide
            };
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectRangeByNestedIndex(index) {
        /** @type {?} */
        const selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        (slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        (slidesList) => {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.index === index)) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => {
            slide.item.active = true;
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexInRange(index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            const visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    /**
     * @private
     * @return {?}
     */
    hideSlides() {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active = false));
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListLast() {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveSliderByOneItem(direction) {
        /** @type {?} */
        let firstVisibleIndex;
        /** @type {?} */
        let lastVisibleIndex;
        /** @type {?} */
        let indexToHide;
        /** @type {?} */
        let indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            const slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            let displayedIndex;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }, ...this._slidesWithIndexes];
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index)));
        }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveMultilist(direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibleIndexes() {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        /** @type {?} */
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return setInterval((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    }
    /**
     * @return {?}
     */
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", startFromIndex: "startFromIndex", activeSlide: "activeSlide", interval: "interval", noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CarouselComponent.propDecorators = {
    noWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    noPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pauseOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsByChunk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemsPerSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    singleSlideOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeSlideChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    slideRangeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }]
    }], function () { return [{ type: CarouselConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { indicatorsByChunk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsPerSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], singleSlideOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlideChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], slideRangeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startFromIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pauseOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselComponent)); };
SlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
    } }, inputs: { active: "active" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
    } }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
SlideComponent.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.order',] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-animation',] }],
    addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[attr.aria-hidden]': '!active'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  `]
            }]
    }], function () { return [{ type: CarouselComponent }]; }, { itemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.order']
        }], addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.item']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-item']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-animation']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: function () { return [SlideComponent, CarouselComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [SlideComponent, CarouselComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-carousel.js.map

/***/ }),

/***/ "O+hz":
/*!*************************************************************************!*\
  !*** ./src/app/modules/landing/components/podcast/podcast.component.ts ***!
  \*************************************************************************/
/*! exports provided: PodcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastComponent", function() { return PodcastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../landing.service */ "ZONj");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");
/* harmony import */ var _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/login-reg-modal/login-reg-modal.component */ "vVZ6");







function PodcastComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "audio", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2["itunes:image"][0] == null ? null : item_r2["itunes:image"][0].$ == null ? null : item_r2["itunes:image"][0].$.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2 == null ? null : item_r2.enclosure[0] == null ? null : item_r2.enclosure[0].$ == null ? null : item_r2.enclosure[0].$.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.pubDate[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.title[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r2 == null ? null : item_r2.description[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PodcastComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PodcastComponent_div_9_div_3_Template, 10, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.item);
} }
class PodcastComponent {
    constructor(landingService) {
        this.landingService = landingService;
    }
    ngOnInit() {
        this.landingService.getRssFeedData().subscribe((data) => {
            console.log(data);
            this.data = data.rss.channel[0];
        });
    }
}
PodcastComponent.ɵfac = function PodcastComponent_Factory(t) { return new (t || PodcastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_1__["LandingService"])); };
PodcastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastComponent, selectors: [["app-podcast"]], decls: 37, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "offset-md-3", "col-md-6", "col-12"], [1, "desc"], [1, "title"], [1, "description"], ["class", "data-block", 4, "ngIf"], [1, "offset-md-2", "col-md-1", "col-12"], [1, "time-line"], ["routerLink", "/podcast", 1, "name"], ["href", "https://www.gfhisummit.com/", "target", "_blank", 1, "name"], ["target", "_blank", "href", "https://www.disruptfoodsummit.com/", 1, "name"], ["routerLink", "/join-to-conference", 1, "name"], ["routerLink", "/", 1, "name"], ["routerLink", "/payments/select", 1, "name"], [1, "data-block"], ["class", "podcast-block row ", 4, "ngFor", "ngForOf"], [1, "podcast-block", "row"], [1, "col-12", "col-md-6", "img-block"], [1, "img", 3, "src"], ["controls", "", 3, "src"], [1, "dcol-12", "col-md-6", "podcast-data-block"], [1, "date"], [1, "p-title"], [1, "p-description", 3, "innerHtml"]], template: function PodcastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PodcastComponent_div_9_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "FoodNiche\u00AE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Global Health Summit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FoodNiche\u00AE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tech Summit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contacts us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Join Us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-login-reg-modal");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.description[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.item);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_6__["LoginRegModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".time-line[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n}\n@media only screen and (max-width: 900px) {\n  .time-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.time-line[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.time-line[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: auto;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n  border-left: 3px solid #c4c4c4;\n  position: relative;\n  padding-left: 20px;\n  color: #9a9a9a;\n  width: 0px;\n  height: 130px;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  background: #9a9a9a;\n  border: 3px solid #9a9a9a;\n  border-radius: 50%;\n  position: absolute;\n  left: -9px;\n  top: 0px;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before {\n  background: #db8d2d !important;\n  border: 3px solid #db8d2d !important;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: relative;\n  left: -200px;\n  width: -webkit-max-content;\n  width: max-content;\n  color: #9a9a9a;\n  text-decoration: none;\n  cursor: pointer;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:hover {\n  color: #db8d2d;\n  cursor: pointer;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: 0px;\n  padding-bottom: 0;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  position: absolute;\n  left: -6px;\n  top: 0px;\n}\n.desc[_ngcontent-%COMP%] {\n  margin-top: 120px;\n}\n.desc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 44px;\n  color: #9a9a9a;\n}\n.desc[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  font-size: 16px;\n  line-height: 26px;\n  color: #343434;\n}\n.data-block[_ngcontent-%COMP%] {\n  margin-top: 120px;\n}\n.data-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 44px;\n  color: #9a9a9a;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%] {\n  margin-top: 120px;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 250px;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%]   .podcast-data-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  \n  color: #db8d2d;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%]   .podcast-data-block[_ngcontent-%COMP%]   .p-title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  \n  color: #000000;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%]   .podcast-data-block[_ngcontent-%COMP%]   .p-description[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  height: 250px;\n  overflow: scroll;\n}\n.data-block[_ngcontent-%COMP%]   .podcast-block[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBvZGNhc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFISjtJQUlRLGFBQUE7RUFHTjtBQUNGO0FBREk7O0VBRUksZ0JBQUE7RUFDQSxVQUFBO0FBR1I7QUFESTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUdSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBR1o7QUFBUTtFQUNJLDhCQUFBO0VBQ0Esb0NBQUE7QUFFWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDWjtBQUVRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFBWjtBQUdRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRFo7QUFJUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUZaO0FBT0E7RUFDSSxpQkFBQTtBQUpKO0FBS0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFIUjtBQU1JO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSlI7QUFRQTtFQUNJLGlCQUFBO0FBTEo7QUFNSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUpSO0FBT0k7RUFDSSxpQkFBQTtBQUxSO0FBT1E7RUFDSSxhQUFBO0FBTFo7QUFRUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQU5aO0FBT1k7RUFDSSxZQUFBO0FBTGhCO0FBVVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsY0FBQTtBQVRoQjtBQVlZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsY0FBQTtBQVhoQjtBQWNZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFaaEI7QUFpQkk7RUFDSSxtQkFBQTtBQWZSIiwiZmlsZSI6InBvZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZS1saW5lIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB1bCxcclxuICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5YTlhOWE7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5YTlhOWE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM5YTlhOWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtOXB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RiOGQyZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZGI4ZDJkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogLTIwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNkYjhkMmQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTZweDtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOWE5YTlhO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRhLWJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgY29sb3I6ICM5YTlhOWE7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvZGNhc3QtYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZy1ibG9jayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9kY2FzdC1kYXRhLWJsb2NrIHtcclxuICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkYjhkMmQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBvZGNhc3QtYmxvY2s6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PxWi":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/landing/components/privacy-police/privacy-police.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PrivacyPoliceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPoliceComponent", function() { return PrivacyPoliceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");



class PrivacyPoliceComponent {
}
PrivacyPoliceComponent.ɵfac = function PrivacyPoliceComponent_Factory(t) { return new (t || PrivacyPoliceComponent)(); };
PrivacyPoliceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPoliceComponent, selectors: [["app-privacy-police"]], decls: 133, vars: 0, consts: [[1, "padding-main"], [1, "container"], [1, "section-heading", "text-center", "terms-n-cond"], [1, "h-bold"], [1, "star-light", "star-light-about"], [1, "card", "panel-default", "panel-food-niche"]], template: function PrivacyPoliceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FoodNiche Inc. (FoodNiche) values its users' privacy. This Privacy Policy (\"Policy\") will help you understand how we collect and use personal information from those who visit our website or make use of our online facilities and services, and what we will and will not do with the information we collect. Our Policy has been designed and created to ensure those affiliated with FoodNiche Inc. of our commitment and realization of our obligation not only to meet, but to exceed, most existing privacy standards. We reserve the right to make changes to this Policy at any given time. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page. If at any point in time FoodNiche Inc. decides to make use of any personally identifiable information on file, in a manner vastly different from that which was stated when this information was initially collected, the user or users shall be promptly notified by email. Users at that time shall have the option as to whether to permit the use of their information in this separate manner. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This Policy applies to FoodNiche Inc., and it governs any and all data collection and usage by us. Through the use of www.foodnicher.com, you are therefore consenting to the data collection procedures expressed in this Policy. Please note that this Policy does not govern the collection and use of information by companies that FoodNiche Inc. does not control, nor by individuals not employed or managed by us. If you visit a website that we mention or link to, be sure to review its privacy policy before providing the site with information. It is highly recommended and suggested that you review the privacy policies and statements of any website you choose to use or frequent to better understand the way in which websites garner, make use of and share the information collected. Specifically, this policy will inform you of the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1. What personally identifiable information is collected from you through our website: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2. Why we collect personally identifiable information and the legal basis for such collection; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "3. How we use the collected information and with whom it may be shared; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "4. What choices are available to you regarding the use of your data; and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "5. The security procedures in place to protect the misuse of your information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Information We Collect It is always up to you whether to disclose personally identifiable information to us, although if you elect not to do so, we reserve the right not to register you as a user or provide you with any products or services. This website collects various types of information, such as: Information automatically collected when visiting our website, which may include cookies, third party tracking technologies and server logs. In addition, FoodNiche Inc. may have the occasion to collect non-personal anonymous demographic information, such as age, gender, household income, political affiliation, race and religion, as well as the type of browser you are using, IP address, or type of operating system, which will assist us in providing and maintaining superior quality service. FoodNiche Inc. may also deem it necessary, from time to time, to follow websites that our users may frequent to gleam what types of services and products may be the most popular to customers or the general public. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Why we collect information and for how long we are collecting your data for several reasons: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00B7 To better understand your needs and provide you with the services you have requested; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00B7 To fulfill our legitimate interest in improving our services and products; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00B7 To send you promotional emails containing information we think you may like when we have your consent to do so; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00B7 To contact you to fill out surveys or participate in other types of market research, when we have your consent to do so; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00B7 To customize our website according to your online behavior and personal preferences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "The data we collect from you will be stored for no longer than necessary. The length of time we retain said information will be determined based upon the following criteria: the length of time your personal information remains relevant; the length of time it is reasonable to keep records to demonstrate that we have fulfilled our duties and obligations; any limitation periods within which claims might be made; any retention periods prescribed by law or recommended by regulators, professional bodies or associations; the type of contract we have with you, the existence of your consent, and our legitimate interest in keeping such information as stated in this Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Use of Information Collected FoodNiche Inc. does not now, nor will it in the future, sell, rent or lease any of its customer lists and/or names to any third parties. FoodNiche Inc. may collect and may make use of personal information to assist in the operation of our website and to ensure delivery of the services you need and request. At times, we may find it necessary to use personally identifiable information as a means to keep you informed of other possible products and/or services that may be available to you from www.FoodNicher.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FoodNiche Inc. may also be in contact with you with regards to completing surveys and/or research questionnaires related to your opinion of current or potential future services that may be offered. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Disclosure of Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Labs Inc. may not use or disclose the information provided by you except under the following circumstances: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "as necessary to provide services or products you have ordered; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "in other ways described in this Policy or to which you have otherwise consented; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "in the aggregate with other information in such a way so that your identity cannot reasonably be determined; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "as required by law, or in response to a subpoena or search warrant; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "to outside auditors who have agreed to keep the information confidential; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "as necessary to enforce the Terms of Service; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "as necessary to maintain, safeguard and preserve all the rights and property of FoodNiche Inc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Non-Marketing Purposes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "FoodNiche Inc. greatly respects your privacy. We do maintain and reserve the right to contact you if needed for non-marketing purposes (such as bug alerts, security breaches, account issues, and/or changes in FoodNiche Inc. products and services). In certain circumstances, we may use our website, newspapers, or other public means to post a notice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Unsubscribe or Opt-Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "All users and visitors to our website have the option to discontinue receiving communications from us by way of email or newsletters. To discontinue or unsubscribe from our website please send an email that you wish to unsubscribe to pr@foodnicher.com. If you wish to unsubscribe or opt-out from any third-party websites, you must go to that specific website to unsubscribe or opt-out. FoodNiche Inc. will continue to adhere to this Policy with respect to any personal information previously collected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Links to Other Websites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Our website does contain links to affiliate and other websites. FoodNiche Inc. does not claim nor accept responsibility for any privacy policies, practices and/or procedures of other such websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of every website that collects personally identifiable information. This Privacy Policy Agreement applies only and solely to the information collected by our website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Notice to European Union Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "FoodNiche Inc.'s operations are located primarily in the United States. If you provide information to us, the information will be transferred out of the European Union (EU) and sent to the United States. (The adequacy decision on the EU-US Privacy became operational on August 1, 2016. This framework protects the fundamental rights of anyone in the EU whose personal data is transferred to the United States for commercial purposes. It allows the free transfer of data to companies that are certified in the US under the Privacy Shield.) By providing personal information to us, you are consenting to its storage and use as described in this Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Your Rights as a Data Subject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Under the regulations of the General Data Protection Regulation (\"GDPR\") of the EU you have certain rights as a Data Subject. These rights are as follows: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00B7 The right to be informed: this means we must inform you of how we intend to use your personal data and we do this through the terms of this Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u00B7 The right of access: this means you have the right to request access to the data we hold about you and we must respond to those requests within one month. You can do this by sending an email to pr@foodnicher.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00B7 The right to rectification: this means that if you believe some of the date, we hold is incorrect, you have the right to have it corrected. You can do this by logging into your account with us, or by sending us an email with your request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u00B7 The right to erasure: this means you can request that the information we hold be deleted, and we will comply unless we have a compelling reason not to, in which case you will be informed of same. You can do this by sending an email to pr@foodnicher.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u00B7 The right to restrict processing: this means you can change your communication preferences or opt-out of certain communications. You can do this by sending an email to pr@foodnicher.com. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u00B7 The right of data portability: this means you can obtain and use the data we hold for your own purposes without explanation. If you wish to request a copy of your information, contact us at pr@foodnicher.com. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u00B7 The right to object: this means you can file a formal objection with us regarding our use of your information with regard to third parties, or its processing where our legal basis is our legitimate interest in it. To do this, please send an email to pr@foodnicher.com. In addition to the rights above, please rest assured that we will always aim to encrypt and anonymize your personal information whenever possible. We also have protocols in place in the unlikely event that we suffer a data breach and we will contact you if your personal information is ever at risk. For more details regarding our security protections see the section below or visit our website at www.FoodNicher.com. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Security ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "FoodNiche Inc. takes precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information (e.g. credit card information), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for \"https\" at the beginning of the address of the webpage. While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers and servers in which we store personally identifiable information are kept in a secure environment. This is all done to prevent any loss, misuse, unauthorized access, disclosure or modification of the user's personal information under our control. The company also uses Secure Socket Layer (SSL) for authentication and private communications to build users' trust and confidence in the internet and website use by providing simple and secure access and communication of credit card and personal information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Acceptance of Terms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "By using this website, you are hereby accepting the terms and conditions stipulated within the Privacy Policy Agreement. If you are not in agreement with our terms and conditions, then you should refrain from further use of our sites. In addition, your continued use of our website following the posting of any updates or changes to our terms and conditions shall mean that you agree and acceptance of such changes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "How to Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel free to contact us at the following email, telephone number or mailing address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Email: pr@foodnicher.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Telephone Number: 8567778572 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Mailing Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "FoodNiche Inc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "PO Box 6422 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "East Brunswick, New Jersey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "08816 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "The data controller responsible for your personal information for the purposes of GDPR compliance is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Bunmi Babatunde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "pr@foodnicher.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "8567778572");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "P.O Box 6422, East Brunswick NJ 08816 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "GDPR Disclosure: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByaXZhY3ktcG9saWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoicHJpdmFjeS1wb2xpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZONj":
/*!****************************************************!*\
  !*** ./src/app/modules/landing/landing.service.ts ***!
  \****************************************************/
/*! exports provided: LandingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingService", function() { return LandingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





class LandingService {
    constructor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
    }
    register(user) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/auth/register`;
        return this.http.post(url, user);
    }
    login(auth) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/auth/login`;
        return this.http.post(url, auth);
    }
    getUserProfile() {
        const token = this.cookieService.get('token');
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/api/users/profile`;
        return this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('X-Auth-Token', token),
        });
    }
    updateUserProfile(data) {
        const token = this.cookieService.get('token');
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/api/users/profile`;
        return this.http.put(url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('X-Auth-Token', token),
        });
    }
    sengGiftToUser() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/sendgift`;
        return this.http.get(url);
    }
    approveUser(data) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/approve`;
        return this.http.post(url, data);
    }
    checkUserIsPayed(uid) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/payments/check/${uid}`;
        return this.http.get(url);
    }
    getRssFeedData() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/posts/podcast`;
        return this.http.get(url);
    }
}
LandingService.ɵfac = function LandingService_Factory(t) { return new (t || LandingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LandingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LandingService, factory: LandingService.ɵfac });


/***/ }),

/***/ "ccrF":
/*!*************************************************************************!*\
  !*** ./src/app/modules/landing/components/payment/payment.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/login-reg-modal/login-reg-modal.component */ "vVZ6");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../landing.service */ "ZONj");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");













function PaymentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Join A Global Network Of Food Industry Leaders, Stay Ahead Of Trends & Promote Your Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Benefits");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "3 months");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "6 months");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "12 months");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Full access to videos from FoodNiche tech summit and FoodNiche global health Summit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Connect with global leaders and stakeholders in the food industry.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Share information about your brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Discover and engage with innovative brands");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Food industry updates via newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Pass to all FoodNiche virtual conferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Priority access to FoodNiche conference promotional opportunities");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Discounted pass to FoodNiche in-person conference.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Investment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " $150 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " $270 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " $480 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentComponent_ng_container_0_Template_button_click_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.select("m3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentComponent_ng_container_0_Template_button_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.select("m6"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentComponent_ng_container_0_Template_button_click_103_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.select("m12"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Podcast");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "FoodNiche\u00AE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, " Global Health Summit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "FoodNiche\u00AE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, " Tech Summit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Contacts us");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Join Us!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
class PaymentComponent {
    constructor(route, router, landingService, toastr, spinner, cookieService) {
        this.route = route;
        this.router = router;
        this.landingService = landingService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.cookieService = cookieService;
        this.selectPrice = false;
        this.stripe = new Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].STRIPE.PUB_KEY);
    }
    ngOnInit() {
        // this.spinner.show();
        if (this.cookieService.get('paymentPlan')) {
            this.paymentPlan = this.cookieService.get('paymentPlan');
        }
        if (this.cookieService.get('userProfile')) {
            this.user = JSON.parse(this.cookieService.get('userProfile'));
        }
        // tslint:disable-next-line: deprecation
        this.route.params.subscribe((params) => {
            if (params.status === 'success') {
                this.selectPrice = false;
                this.success();
            }
            else if (params.status === 'cancel') {
                this.toastr.error('Payment not success');
                this.error();
            }
            else if (params.status === 'check') {
                this.check();
            }
            else if (params.status === 'select') {
                if (this.paymentPlan && this.user) {
                    this.select(this.paymentPlan);
                }
                else {
                    this.selectPrice = true;
                }
            }
            this.spinner.hide();
        });
    }
    success() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const payment = yield this.landingService
                    .checkUserIsPayed(this.user.uid)
                    .toPromise();
                if (!payment || !payment.paymentid || !payment.uid) {
                    this.toastr.error('Payment not success');
                    this.router.navigate([`/payments/select`]);
                    return;
                }
                this.router.navigate([`/dashboard`]);
            }
            catch (_a) {
                this.error();
            }
        });
    }
    check() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const payment = yield this.landingService
                    .checkUserIsPayed(this.user.uid)
                    .toPromise();
                if (!payment || !payment.paymentid || !payment.uid) {
                    this.toastr.error('Need pay for service');
                    this.router.navigate([`/payments/select`]);
                    return;
                }
                this.spinner.hide();
                this.router.navigate([`/dashboard`]);
            }
            catch (_a) {
                this.error();
            }
        });
    }
    select(type) {
        if (!this.user) {
            this.loginRegModalComponent.openModal('reg');
            this.cookieService.set('paymentPlan', type);
            return;
        }
        let stripePrice = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].STRIPE.M3;
        if (type === 'm3') {
            stripePrice = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].STRIPE.M3;
        }
        else if (type === 'm6') {
            stripePrice = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].STRIPE.M6;
        }
        else if (type === 'm12') {
            stripePrice = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].STRIPE.M12;
        }
        this.stripe
            .redirectToCheckout({
            items: [{ plan: stripePrice, quantity: 1 }],
            successUrl: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].FE_URL}/payments/success`,
            cancelUrl: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].FE_URL}/payments/cancel`,
            customerEmail: this.user.email
        })
            .then((result) => {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        });
    }
    error() {
        // this.spinner.hide();
        this.router.navigate([`/payments/select`]);
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_5__["LandingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], viewQuery: function PaymentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_1__["LoginRegModalComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.loginRegModalComponent = _t.first);
    } }, decls: 2, vars: 1, consts: [[4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-md-3", "col-12"], [1, "background"], [1, "col-md-8", "col-12", "table-scroll"], [1, "table", "title"], [1, "benefits"], [1, "months"], [1, "table"], ["src", "/assets/img/check.png", "alt", "check"], [1, "btn", "btn-select", 3, "click"], [1, "col-md-1", "col-12"], [1, "time-line"], ["routerLink", "/podcast", 1, "name"], ["href", "https://www.gfhisummit.com/", "target", "_blank", 1, "name"], ["target", "_blank", "href", "https://www.disruptfoodsummit.com/", 1, "name"], ["routerLink", "/join-to-conference", 1, "name"], ["routerLink", "/", 1, "name"], ["routerLink", "/payments/select", 1, "name"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PaymentComponent_ng_container_0_Template, 131, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-login-reg-modal");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectPrice);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_1__["LoginRegModalComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: [".background[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 700px;\n  background: linear-gradient(148.61deg, #6a4e2f 35.17%, #db8d2d 92.83%);\n  display: flex;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  color: #ffffff;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.time-line[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n}\n@media only screen and (max-width: 900px) {\n  .time-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.time-line[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.time-line[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: auto;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n  border-left: 3px solid #c4c4c4;\n  position: relative;\n  padding-left: 20px;\n  color: #9a9a9a;\n  width: 0px;\n  height: 130px;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  background: #9a9a9a;\n  border: 3px solid #9a9a9a;\n  border-radius: 50%;\n  position: absolute;\n  left: -9px;\n  top: 0px;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before {\n  background: #db8d2d !important;\n  border: 3px solid #db8d2d !important;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: relative;\n  left: -200px;\n  width: -webkit-max-content;\n  width: max-content;\n  color: #9a9a9a;\n  text-decoration: none;\n  cursor: pointer;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:hover {\n  color: #db8d2d;\n  cursor: pointer;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: 0px;\n  padding-bottom: 0;\n}\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  position: absolute;\n  left: -6px;\n  top: 0px;\n}\n.table[_ngcontent-%COMP%] {\n  width: calc(100% - 200px);\n  display: flex;\n  min-height: 60px;\n}\n@media (max-width: 767px) {\n  .table[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n.table[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.table[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%] {\n  width: 55%;\n  margin-top: auto;\n  margin-bottom: auto;\n  font-weight: bold;\n  font-size: 18px;\n}\n.table[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  width: 15%;\n  margin: auto;\n  text-align: center;\n}\n.table[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.btn-select[_ngcontent-%COMP%] {\n  margin: 6px 6px 6px 6px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background: transparent;\n  border: 2px solid #db8d2d;\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 22px;\n  color: #db8d2d;\n}\n.table[_ngcontent-%COMP%]:nth-child(2n) {\n  background: rgba(229, 229, 229, 0.5);\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNFQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRVI7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBSEo7SUFJUSxhQUFBO0VBR047QUFDRjtBQURJOztFQUVJLGdCQUFBO0VBQ0EsVUFBQTtBQUdSO0FBREk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFHUjtBQURRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUdaO0FBQVE7RUFDSSw4QkFBQTtFQUNBLG9DQUFBO0FBRVo7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ1o7QUFFUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQVo7QUFHUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQURaO0FBSVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFGWjtBQU9BO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1JO0VBTEo7SUFNUSxZQUFBO0VBSE47QUFDRjtBQUtRO0VBQ0ksMEJBQUE7QUFIWjtBQU1JO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKUjtBQU9JO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxSO0FBTVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUpaO0FBU0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTko7QUFTQTtFQUNJLG9DQUFBO0FBTko7QUFTQTtFQUNJLGNBQUE7QUFOSiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OC42MWRlZywgIzZhNGUyZiAzNS4xNyUsICNkYjhkMmQgOTIuODMlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi50aW1lLWxpbmUge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHVsLFxyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNjNGM0YzQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogIzlhOWE5YTtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzlhOWE5YTtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzlhOWE5YTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC05cHg7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGI4ZDJkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNkYjhkMmQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMjAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgY29sb3I6ICM5YTlhOWE7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWU6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2RiOGQyZDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICAqIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJlbmVmaXRzIHtcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbnRocyB7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDZweCA2cHggNnB4IDZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYjhkMmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogI2RiOGQyZDtcclxufVxyXG5cclxuLnRhYmxlOm50aC1jaGlsZCgybikge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjksIDIyOSwgMjI5LCAwLjUpO1xyXG59XHJcblxyXG4udGFibGUtc2Nyb2xsIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "dnha":
/*!***********************************************************!*\
  !*** ./src/app/modules/landing/landing-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "eei9");
/* harmony import */ var _components_privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/privacy-police/privacy-police.component */ "PxWi");
/* harmony import */ var _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/terms-of-use/terms-of-use.component */ "hg9T");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "vrbt");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/payment/payment.component */ "ccrF");
/* harmony import */ var _components_2021_summit_2021_summit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/2021-summit/2021-summit.component */ "o5jX");
/* harmony import */ var _components_podcast_podcast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/podcast/podcast.component */ "O+hz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '',
        component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true,
        },
    },
    {
        path: 'privacy',
        component: _components_privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyPoliceComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true
        },
    },
    {
        path: 'terms',
        component: _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_3__["TermsOfUseComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true
        },
    },
    {
        path: 'resetpass',
        component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true
        },
    },
    {
        path: 'payments/:status',
        component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"],
        data: {
            login: true,
            dashboard: true,
            register: false,
            logout: true
        },
    },
    {
        path: '2021-summit',
        component: _components_2021_summit_2021_summit_component__WEBPACK_IMPORTED_MODULE_6__["SummitComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true
        },
    },
    {
        path: '2021-Summit',
        component: _components_2021_summit_2021_summit_component__WEBPACK_IMPORTED_MODULE_6__["SummitComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true
        },
    },
    {
        path: 'podcast',
        component: _components_podcast_podcast_component__WEBPACK_IMPORTED_MODULE_7__["PodcastComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true,
        },
    },
];
class LandingRoutingModule {
}
LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "eei9":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/landing/components/landing-page/landing-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/login-reg-modal/login-reg-modal.component */ "vVZ6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/validators/email-validator */ "HLwJ");
/* harmony import */ var _shared_validators_equal_passwords_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/validators/equal-passwords-validator */ "NUwn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "LyFO");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");














class LandingPageComponent {
    constructor(fb, router, authService, spinner, toastr, cookieService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.signInError = false;
        this.emailError = false;
        this.passwordError = false;
        this.submitted = false;
        this.preloader = false;
        this.newUser = {};
    }
    ngOnInit() {
        if (this.cookieService.get('userProfile')) {
            this.user = JSON.parse(this.cookieService.get('userProfile'));
        }
        this.formReg = this.fb.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"].validate]),
            ],
            name: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            ],
            company: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            ],
            title: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            ],
            linkedin: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            ],
            // tslint:disable-next-line: deprecation
            passwords: this.fb.group({
                password: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
                ],
                repeatPassword: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
                ],
            }, {
                validator: _shared_validators_equal_passwords_validator__WEBPACK_IMPORTED_MODULE_3__["EqualPasswordsValidator"].validate('password', 'repeatPassword'),
            }),
            agreeTerms: [false],
            above13: [false],
        });
        this.agreeTerms = this.formReg.controls.agreeTerms;
        this.emailReg = this.formReg.controls.email;
        this.linkedinReg = this.formReg.controls.linkedin;
        this.passwordsReg = this.formReg.controls.passwords;
        this.passwordReg = this.passwordsReg.controls.password;
        this.repeatPasswordReg = this.passwordsReg.controls.repeatPassword;
        this.nameReg = this.formReg.controls.name;
        this.companyReg = this.formReg.controls.company;
        this.titleReg = this.formReg.controls.title;
    }
    openLogRegModal(modal) {
        this.loginRegModalComponent.openModal(modal);
    }
    onSubmitReg(values) {
        this.preloader = true;
        this.submitted = true;
        this.spinner.show();
        if (values.email && values.name && values.passwords.password) {
            this.newUser.email = values.email.toLocaleLowerCase();
            this.newUser.name = values.name;
            this.newUser.title = values.title;
            this.newUser.company = values.company;
            this.newUser.password = values.passwords.password;
            this.newUser.linkedin = values.linkedin;
            // tslint:disable-next-line: deprecation
            this.authService.register(this.newUser).subscribe((data) => {
                this.login(this.newUser);
            }, (e) => {
                var _a;
                this.spinner.hide();
                this.toastr.error((_a = e === null || e === void 0 ? void 0 : e.error) === null || _a === void 0 ? void 0 : _a.message, 'Error!');
            });
        }
        this.spinner.hide();
    }
    login(auth) {
        this.spinner.show();
        // tslint:disable-next-line: deprecation
        this.authService.login(auth).subscribe((res) => {
            if (res && res.token) {
                this.cookieService.set('token', res.token);
                this.cookieService.set('userProfile', JSON.stringify(res));
                this.router.navigate(['/payments/select']);
            }
            else {
                this.toastr.error('Could not login, please verify your credentials!');
            }
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('Could not login, please verify your credentials!');
        });
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"])); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], viewQuery: function LandingPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__["LoginRegModalComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.loginRegModalComponent = _t.first);
    } }, decls: 133, vars: 0, consts: [[1, "banner_section"], [1, "container-fluid"], [1, "banner_wrapper"], [1, "row"], [1, "col-md-6"], [1, "banner_description_pane"], [1, "banner_description"], ["src", "/assets/img/landing/Illustration1_.png", "alt", "", 1, "banner_img"], [1, "time-line"], ["routerLink", "/podcast", 1, "name"], ["href", "https://www.gfhisummit.com/", "target", "_blank", 1, "name"], ["target", "_blank", "href", "https://www.disruptfoodsummit.com/", 1, "name"], ["routerLink", "/join-to-conference", 1, "name"], ["routerLink", "/", 1, "name"], ["routerLink", "/payments/select", 1, "name"], [1, "logo_section", "pt-5", "pb-5"], [1, "container"], [1, "col-md-12"], [1, "category_title"], [1, "category-wrapper"], [1, "category_pane"], [1, "row", "align-items-center", "d-flex", "justify-content-between", "pt-3", "pb-3"], [1, "swan", "category_item"], ["src", "/assets/img/landing/Logo/new_ny_wire_logo.png", 1, "category_img"], [1, "swancer", "category_item"], ["src", "/assets/img/landing/Logo/zz9.png", 1, "category_img"], [1, "sport", "category_item"], ["src", "/assets/img/landing/Logo/usnews_logo-1.png", 1, "category_img"], [1, "audio", "category_item"], ["src", "/assets/img/landing/Logo/5788f99912df981e2b156a72.png", 1, "category_img"], [1, "rko", "category_item"], ["src", "/assets/img/landing/Logo/logo_AOGR.png", 1, "category_img"], [1, "category_btn_pane"], [1, "btn", "btn_category"], [1, "prmotion_section"], ["src", "/assets/img/landing/Illustration2_.png", "alt", "", 1, "img"], [1, "description_pane"], [1, "title"], [1, "title_m"], [1, "description"], [1, "program_section"], ["src", "/assets/img/landing/Illustration3.png", "alt", "", 1, "img"], [1, "collaboration_section"], ["src", "/assets/img/landing/Illustration4.png", "alt", "", 1, "img"], [1, "logo_section", "pt-5"], ["src", "/assets/img/landing/Logo/2560px-PepsiCo_logo.svg.png", 1, "category_img"], ["src", "/assets/img/landing/Logo/AeroFarms_Logo+Tagline_FullColor_Gradient.png", 1, "category_img"], ["src", "/assets/img/landing/Logo/1280px-Facebook_Logo_(2019).svg.png", 1, "category_img"], ["src", "/assets/img/landing/Logo/Viome.png", 1, "category_img"], ["src", "/assets/img/landing/Logo/edamam_logo.png", 1, "category_img"], ["src", "/assets/img/Hand_5.png", "alt", "Hand_4", 1, "hand_5"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Promoting & Supporting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Innovating Food Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "FoodNiche\u00AE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Global Health Summit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "FoodNiche\u00AE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Tech Summit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Contacts us");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Join Us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Featured on:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Join Us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Promoting Innovative Brands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " in Food + Health ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Brand Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "We create opportunities for brands innovating for a healthier & sustainable food system share their story and products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Providing Exceptional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, " Programming & Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "We keep leaders in the food industry informed and ahead of the trends through our programming, reports and newsletters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Facilitating Collaboration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, " & Networking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Networking");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "We create opportunities for food industry leaders innovators and investors to expand their network, collaborate or discover potential partners.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Companies In Our Network Includes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Join Us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "app-login-reg-modal");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__["LoginRegModalComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -75px;\n}\n\n.banner_section[_ngcontent-%COMP%] {\n  background: url(\"/assets/img/landing/Group_6.png\") no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 2rem 0;\n}\n\n.prmotion_section[_ngcontent-%COMP%] {\n  background: url(/assets/img/landing/Group_7.png) no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 2rem 0;\n  margin-top: 30px;\n  color: #fff;\n}\n\n.program_section[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-position: center;\n  background-size: cover;\n  padding: 2rem 0;\n  margin-top: 30px;\n  color: #333333;\n}\n\n.collaboration_section[_ngcontent-%COMP%] {\n  background: url(/assets/img/landing/Group_8.png) no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 2rem 0;\n  margin-top: 30px;\n  color: #fff;\n}\n\n.description_pane[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  line-height: 1.5;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.title_m[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.banner_wrapper[_ngcontent-%COMP%] {\n  width: calc(100% - 200px);\n}\n\n.banner_description_pane[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n  line-height: 1.5;\n}\n\n.banner_description[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: bold;\n  color: #744e2b;\n}\n\n.banner_img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.logo_section[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.category_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.pb-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-bottom: 3rem !important;\n}\n\n.category_title[_ngcontent-%COMP%] {\n  color: #333333;\n  text-align: center;\n}\n\n.category_item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.category_img[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 15px;\n}\n\n.category_btn_pane[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn_category[_ngcontent-%COMP%] {\n  background: #db8d2d;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 22px;\n  padding: 0.375rem 4rem;\n  color: #fff;\n}\n\n.hand_5[_ngcontent-%COMP%] {\n  width: 50px;\n  padding: 10px 0;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 760px;\n  background: #fff;\n  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.16));\n  position: absolute;\n  left: calc(100% - 560px);\n  top: 250px;\n}\n\n.register[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n}\n\n.register[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 90%;\n  height: auto;\n}\n\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n}\n\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-top: none;\n  border-radius: 0;\n  border-left: none;\n  border-right: none;\n}\n\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  background: #db8d2d;\n  color: #ffffff;\n}\n\n.carusel[_ngcontent-%COMP%] {\n  width: calc(100% - 350px);\n  margin-top: 40px;\n  margin-bottom: 40px;\n  margin-left: 40px;\n  min-height: 600px;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-control {\n  display: none;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-inner img {\n  width: 100%;\n  height: 900px;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-indicators {\n  margin-right: unset;\n  left: unset;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-indicators .ng-star-inserted {\n  width: 40px;\n  height: 40px;\n  margin-right: 20px;\n  margin-left: 20px;\n  border: 0;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-indicators .active {\n  background: #db8d2d;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-caption .title {\n  position: absolute;\n  margin-top: -765px;\n  margin-left: -200px;\n  width: 260px;\n  height: 260px;\n  background: linear-gradient(#db8d2d 0%, #f67e6f 66.67%, #f5866f 100%);\n  display: flex;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-caption .title .name {\n  margin: auto;\n  font-family: \"Myriad Pro\";\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 36px;\n  text-align: center;\n  color: #fff;\n}\n\n.carusel[_ngcontent-%COMP%]     .carousel-caption .description {\n  margin-top: -550px;\n  margin-left: -200px;\n  width: 60%;\n  position: absolute;\n  font-family: \"Myriad Pro\";\n  font-weight: bold;\n  font-size: 62px;\n  line-height: 64px;\n  text-align: left;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 900px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .time-line[_ngcontent-%COMP%] {\n    position: unset;\n    width: 100%;\n  }\n\n  .carusel[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px;\n    min-height: 200px !important;\n  }\n  .carusel[_ngcontent-%COMP%]     .carousel-inner img {\n    width: 100%;\n    height: auto;\n  }\n  .carusel[_ngcontent-%COMP%]     .description {\n    margin-top: -100px !important;\n    margin-left: 0 !important;\n    font-size: 1em !important;\n    line-height: 1em !important;\n    width: 100% !important;\n  }\n}\n\n.time-line[_ngcontent-%COMP%] {\n  width: 200px;\n  display: flex;\n}\n\n.time-line[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.time-line[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 1rem 0;\n}\n\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n  border-left: 2px solid #aa8b6c;\n  position: relative;\n  padding-left: 20px;\n  color: #744e2b;\n  width: 0px;\n  height: 65px;\n}\n\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #744e2b;\n  border: 3px solid #744e2b;\n  border-radius: 50%;\n  position: absolute;\n  left: -7px;\n  top: 0px;\n}\n\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before {\n  width: 16px;\n  height: 16px;\n  left: -8px;\n}\n\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -160px;\n  width: -webkit-max-content;\n  width: max-content;\n  color: #744e2b;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.time-line[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: 0px;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDREQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDBEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDBEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUVKOztBQURJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR047O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFBSTtFQUNFLGdCQUFBO0FBRU47O0FBRE07RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUNJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNOOztBQUNJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ047O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBR0k7RUFDRSxhQUFBO0FBRE47O0FBSU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUZSOztBQU1JO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSk47O0FBS007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBSFI7O0FBS007RUFDRSxtQkFBQTtBQUhSOztBQU9NO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxRUFBQTtFQUNBLGFBQUE7QUFMUjs7QUFNUTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSlY7O0FBUU07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBTlI7O0FBWUE7RUFDRTtJQUNFLHNCQUFBO0VBVEY7O0VBV0E7SUFDRSxlQUFBO0lBQ0EsV0FBQTtFQVJGOztFQVdBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsNEJBQUE7RUFSRjtFQVdNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFUUjtFQWFJO0lBQ0UsNkJBQUE7SUFDQSx5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsMkJBQUE7SUFDQSxzQkFBQTtFQVhOO0FBQ0Y7O0FBaUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFmRjs7QUFnQkU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFkSjs7QUFnQkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFkSjs7QUFnQkU7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWdCSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFkTjs7QUFpQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFmTjs7QUFrQkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWhCTjs7QUFtQkk7RUFDRSxpQkFBQTtBQWpCTjs7QUFvQkk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFsQk4iLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAtNzVweDtcclxufVxyXG5cclxuLmJhbm5lcl9zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9sYW5kaW5nL0dyb3VwXzYucG5nXCIpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbn1cclxuXHJcbi5wcm1vdGlvbl9zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvbGFuZGluZy9Hcm91cF83LnBuZykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZ3JhbV9zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY29sbGFib3JhdGlvbl9zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvbGFuZGluZy9Hcm91cF84LnBuZykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25fcGFuZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGl0bGVfbSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJhbm5lcl93cmFwcGVyIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG59XHJcblxyXG4uYmFubmVyX2Rlc2NyaXB0aW9uX3BhbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmJhbm5lcl9kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNzQ0ZTJiOyBcclxufVxyXG5cclxuLmJhbm5lcl9pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9nb19zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wYi01LCAucHktNSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfdGl0bGUge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhdGVnb3J5X2l0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhdGVnb3J5X2ltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeV9idG5fcGFuZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuX2NhdGVnb3J5IHtcclxuICBiYWNrZ3JvdW5kOiAjZGI4ZDJkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSA0cmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaGFuZF81IHtcclxuICB3aWR0aDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNzYwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogY2FsYygxMDAlIC0gNTYwcHgpO1xyXG4gIHRvcDogMjUwcHg7XHJcbiAgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYnRuLXJlZ2lzdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2RiOGQyZDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydXNlbCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1MHB4KTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5jYXJvdXNlbC1jb250cm9sIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgIC5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgfVxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGI4ZDJkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC03NjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZGI4ZDJkIDAlLCAjZjY3ZTZmIDY2LjY3JSwgI2Y1ODY2ZiAxMDAlKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk15cmlhZCBQcm9cIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTU1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTXlyaWFkIFByb1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAudGltZS1saW5lIHtcclxuICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcnVzZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4udGltZS1saW5lIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB1bCwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgfVxyXG4gIGxpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYThiNmM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzc0NGUyYjtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNzQ0ZTJiO1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjNzQ0ZTJiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTdweDtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBsZWZ0OiAtOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAtMTYwcHg7XHJcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgY29sb3I6ICM3NDRlMmI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lOmhvdmVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "eyox":
/*!***************************************************!*\
  !*** ./src/app/modules/landing/landing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-routing.module */ "dnha");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing.service */ "ZONj");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "eei9");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _components_privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/privacy-police/privacy-police.component */ "PxWi");
/* harmony import */ var _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/terms-of-use/terms-of-use.component */ "hg9T");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "vrbt");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/payment/payment.component */ "ccrF");
/* harmony import */ var _components_2021_summit_2021_summit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/2021-summit/2021-summit.component */ "o5jX");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var _components_podcast_podcast_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/podcast/podcast.component */ "O+hz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");























class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, providers: [_landing_service__WEBPACK_IMPORTED_MODULE_5__["LandingService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
        _components_privacy_police_privacy_police_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPoliceComponent"],
        _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_12__["TermsOfUseComponent"],
        _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"],
        _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
        _components_2021_summit_2021_summit_component__WEBPACK_IMPORTED_MODULE_15__["SummitComponent"],
        _components_podcast_podcast_component__WEBPACK_IMPORTED_MODULE_17__["PodcastComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"]] }); })();


/***/ }),

/***/ "hg9T":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/landing/components/terms-of-use/terms-of-use.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");



class TermsOfUseComponent {
}
TermsOfUseComponent.ɵfac = function TermsOfUseComponent_Factory(t) { return new (t || TermsOfUseComponent)(); };
TermsOfUseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsOfUseComponent, selectors: [["app-terms-of-use"]], decls: 149, vars: 0, consts: [[1, "padding-main"], [1, "container"], [1, "section-heading", "text-center", "terms-n-cond"], [1, "h-bold"], [1, "star-light", "star-light-about"], [1, "card", "panel-default", "panel-food-niche"]], template: function TermsOfUseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " AGREEMENT TO TERMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\u201Cyou\u201D) and FoodNiche Inc., doing business as FOODNICHE Tech Summit/ FoodNiche Global Health Summit (\"FOODNICHE\", \u201Cwe\u201D, \u201Cus\u201D, or \u201Cour\u201D), concerning your access to and use of the http://www.FoodNiche.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the \u201CSite\u201D). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the \u201CLast updated\u201D date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. FoodNiche provides a technology platform for professionals to connect and promote their businesses. FoodNiche does not represent any of these businesses, users are responsible for any business interactions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " By using this site, you agree not to hold FoodNiche Inc, its investors, owners, associates, and staff liable for any loss that may accrue as a result of any business relationship built on the platform. All content are for informational purposes only, users are responsible for how they choose to use the information found on the site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "INTELLECTUAL PROPERTY RIGHTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the \u201CContent\u201D) and the trademarks, service marks, and logos contained therein (the \u201CMarks\u201D) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site \u201CAS IS\u201D for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "USER REPRESENTATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (6) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (7) you will not use the Site for any illegal or unauthorized purpose; and (8) your use of the Site will not violate any applicable law or regulation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "USER REGISTRATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "PROHIBITED ACTIVITIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " As a user of the Site, you agree not to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 1. Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 2. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 3. Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 4. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 5. Use any information obtained from the Site in order to harass, abuse, or harm another person. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 6. Make improper use of our support services or submit false reports of abuse or misconduct. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 7. Use the Site in a manner inconsistent with any applicable laws or regulations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 8. Use the Site to advertise or offer to sell goods and services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 9. Delete the copyright or other proprietary rights notice from any Content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "10. Attempt to impersonate another user or person or use the username of another user. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "11. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (\u201Cgifs\u201D), 1\u00D71 pixels, web bugs, cookies, or other similar devices (sometimes referred to as \u201Cspyware\u201D or \u201Cpassive collection mechanisms\u201D or \u201Cpcms\u201D). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "12. Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "13. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "14. Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "15. Copy or adapt the Site\u2019s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "16. Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "17. Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "18. Use a buying agent or purchasing agent to make purchases on the Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "19. Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "20. By using this site you agree that you are 13 years of age or older ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "USER GENERATED CONTRIBUTIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, \"Contributions\"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "1. The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "2. You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "3. You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "4. Your Contributions are not false, inaccurate, or misleading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "5. Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "6. Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "7. Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "8. Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "9. Your Contributions do not violate any applicable law, regulation, or rule. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "10. Your Contributions do not violate the privacy or publicity rights of any third party. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "11. Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "12. Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "13. Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "14. Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "CONTRIBUTION LICENSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "By posting your Contributions to any part of the Site or making Contributions accessible to the Site by linking your account from the Site to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "MOBILE APPLICATION LICENSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Use License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " If you access the Site via a mobile application, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the mobile application on wireless electronic devices owned or controlled by you, and to access and use the mobile application on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Terms of Use. You shall not: (1) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the application; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application; (5) use the application for any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the application available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application; (8) use the application to send automated queries to any website or to send any unsolicited commercial e-mail; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Apple and Android Devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "The following terms apply when you use a mobile application obtained from either the Apple Store or Google Play (each an \u201CApp Distributor\u201D) to access the Site: (1) the license granted to you for our mobile application is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor\u2019s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the mobile application as specified in the terms and conditions of this mobile application license contained in these Terms of Use or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the mobile application; (3) in the event of any failure of the mobile application to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the mobile application, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the mobile application; (4) you represent and warrant that (i) you are not located in a country that is subject to a U.S. government embargo, or that has been designated by the U.S. government as a \u201Cterrorist supporting\u201D country and (ii) you are not listed on any U.S. government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the mobile application, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the mobile application; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Terms of Use, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Terms of Use against you as a third-party beneficiary thereof. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "SOCIAL MEDIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a \u201CThird-Party Account\u201D) by either: (1) providing your Third-Party Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the \u201CSocial Network Content\u201D) so that it is available on and through the Site via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site. You will have the ability to disable the connection between your account on the Site and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site. You can deactivate the connection between the Site and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "SUBMISSIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (\"Submissions\") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "THIRD-PARTY WEBSITE AND CONTENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "The Site may contain (or you may be sent via the Site) links to other websites (\"Third-Party Websites\") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (\"Third-Party Content\"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "SITE MANAGEMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRlcm1zLW9mLXVzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InRlcm1zLW9mLXVzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "o5jX":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/landing/components/2021-summit/2021-summit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SummitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummitComponent", function() { return SummitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SummitComponent {
}
SummitComponent.ɵfac = function SummitComponent_Factory(t) { return new (t || SummitComponent)(); };
SummitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummitComponent, selectors: [["app-2021-summit"]], decls: 2, vars: 0, consts: [[1, "container-iframe"], ["scrolling", "yes", "frameborder", "0", "allowfullscreen", "", "src", "https://learningforsuccess.lpages.co/food-summit/", 1, "iframe-lpages"]], template: function SummitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-iframe[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  padding-bottom: 56.25%;\n}\n\n.iframe-lpages[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXDIwMjEtc3VtbWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiIyMDIxLXN1bW1pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgfVxyXG4gIC5pZnJhbWUtbHBhZ2VzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "vrbt":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/landing/components/reset-password/reset-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_validators_equal_passwords_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/validators/equal-passwords-validator */ "NUwn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "LyFO");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");











function ResetPasswordComponent_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Minimal password length is 5 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Repeat password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "The password fields do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ENTER NEW PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_div_6_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onSubmit(ctx_r6.form.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ResetPasswordComponent_div_6_div_8_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ResetPasswordComponent_div_6_div_9_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Repeat password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ResetPasswordComponent_div_6_div_14_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ResetPasswordComponent_div_6_div_15_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Update password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.password.errors == null ? null : ctx_r0.password.errors.required) && ctx_r0.password.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.password.errors == null ? null : ctx_r0.password.errors.minlength) && ctx_r0.password.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.repeatPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.repeatPassword.errors == null ? null : ctx_r0.repeatPassword.errors.required) && ctx_r0.repeatPassword.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.passwords.invalid && ctx_r0.repeatPassword.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.passwords.invalid);
} }
function ResetPasswordComponent_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password changed, please login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(fb, router, route, spinner, toastr, authServise) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.toastr = toastr;
        this.authServise = authServise;
        this.reserToken = '';
        this.passwodChanged = false;
        this.form = fb.group({
            passwords: fb.group({
                password: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
                ],
                repeatPassword: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
                ],
            }, {
                validator: _shared_validators_equal_passwords_validator__WEBPACK_IMPORTED_MODULE_1__["EqualPasswordsValidator"].validate('password', 'repeatPassword'),
            }),
        });
        this.passwords = this.form.controls.passwords;
        this.password = this.passwords.controls.password;
        this.repeatPassword = this.passwords.controls.repeatPassword;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((data) => {
            // console.log(data);
            if (data && data.token) {
                this.reserToken = data.token;
            }
            else {
                this.toastr.error('Wrong token!');
            }
        });
    }
    onSubmit(values) {
        const data = {
            password: values.passwords.password,
            passResetToken: this.reserToken,
        };
        this.spinner.show();
        this.authServise.resetPassword(data).subscribe((res) => {
            this.spinner.hide();
            this.passwodChanged = true;
            this.toastr.success('Password changed');
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('Password not changed');
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 9, vars: 2, consts: [[1, "content"], [1, "container"], [1, "row"], [1, "offset-sm-4", "col-sm-4"], ["class", "form-grey", 4, "ngIf"], ["class", "center", 4, "ngIf"], [1, "form-grey"], [1, "center"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "password", 1, "control-label", "label-form"], ["id", "password", "type", "password", "name", "password", "minlength", "5", "required", "", 1, "form-control", "input-lg", 3, "formControl"], ["class", "help-block", 4, "ngIf"], ["for", "passwordRepeat", 1, "control-label", "label-form"], ["id", "passwordRepeat", "type", "password", "name", "passwordRepeat", "minlength", "5", "required", "", 1, "form-control", "input-lg", 3, "formControl"], ["type", "submit", 1, "btn", "btn-warning", "btn-block", "btn-lg", 3, "disabled"], [1, "help-block"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ResetPasswordComponent_div_6_Template, 19, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ResetPasswordComponent_h4_7_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.passwodChanged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwodChanged);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], styles: ["section[_ngcontent-%COMP%] {\n  height: calc(100vh - 190px);\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBSUE7RUFDRSxrQkFBQTtBQURGIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTkwcHgpO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=modules-landing-landing-module.js.map