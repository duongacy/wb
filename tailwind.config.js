// const colors = require('tailwindcss/colors');
const animation = require('./tailwind-custom/animation');
const backgroundImage = require('./tailwind-custom/backgroundImage');
const backgroundPosition = require('./tailwind-custom/backgroundPosition');
const backgroundSize = require('./tailwind-custom/backgroundSize');
const blur = require('./tailwind-custom/blur');
const borderRadius = require('./tailwind-custom/borderRadius');
const borderWidth = require('./tailwind-custom/borderWidth');
const boxShadow = require('./tailwind-custom/boxShadow');
const brightness = require('./tailwind-custom/brightness');
const contrast = require('./tailwind-custom/contrast');
const cursor = require('./tailwind-custom/cursor');
const dropShadow = require('./tailwind-custom/dropShadow');
const fontFamily = require('./tailwind-custom/fontFamily');
const fontSize = require('./tailwind-custom/fontSize');
const fontWeight = require('./tailwind-custom/fontWeight');
const gridAutoColumns = require('./tailwind-custom/gridAutoColumns');
const gridAutoRows = require('./tailwind-custom/gridAutoRows');
const hueRotate = require('./tailwind-custom/hueRotate');
const screens = require('./tailwind-custom/screens');
const spacing = require('./tailwind-custom/spacing');

const gridColum = require('./tailwind-custom/gridColumn');
const gridColumnEnd = require('./tailwind-custom/gridColumnEnd');
const gridColumnStart = require('./tailwind-custom/gridColumnStart');
const gridRowStart = require('./tailwind-custom/gridRowStart');
const gridRowEnd = require('./tailwind-custom/gridRowEnd');
const gridTemplateColumns = require('./tailwind-custom/gridTemplateColumns');
const gridTemplateRows = require('./tailwind-custom/gridTemplateRows');
const height = require('./tailwind-custom/height');
const inset = require('./tailwind-custom/inset');
const keyframes = require('./tailwind-custom/keyframes');
const gridRow = require('./tailwind-custom/gridRow');
const letterSpacing = require('./tailwind-custom/letterSpacing');
const lineHeight = require('./tailwind-custom/lineHeight');
const listStyleType = require('./tailwind-custom/listStyleType');
const maxHeight = require('./tailwind-custom/maxHeight');
const maxWidth = require('./tailwind-custom/maxWidth');
const minHeight = require('./tailwind-custom/minHeight');
const minWidth = require('./tailwind-custom/minWidth');
const objectPosition = require('./tailwind-custom/objectPosition');
const opacity = require('./tailwind-custom/opacity');
const order = require('./tailwind-custom/order');
const outline = require('./tailwind-custom/outline');
const ringOffsetWidth = require('./tailwind-custom/ringOffsetWidth');
const ringWidth = require('./tailwind-custom/ringWidth');
const rotate = require('./tailwind-custom/rotate');
const saturate = require('./tailwind-custom/saturate');
const scale = require('./tailwind-custom/scale');
const skew = require('./tailwind-custom/skew');
const transformOrigin = require('./tailwind-custom/transformOrigin');
const transitionDelay = require('./tailwind-custom/transitionDelay');
const transitionDuration = require('./tailwind-custom/transitionDuration');
const transitionProperty = require('./tailwind-custom/transitionProperty');
const transitionTimingFunction = require('./tailwind-custom/transitionTimingFunction');
const translate = require('./tailwind-custom/translate');
const width = require('./tailwind-custom/width');
const zIndex = require('./tailwind-custom/zIndex');
const colors = require('./tailwind-custom/colors');
const allEffect = ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'disabled']
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [],
    media: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                tablet: '2rem',
                laptop: '4rem',
            }
        },
        extends: {
            // aspectRatio: {
            //     '4/3': '4 / 3',
            // },
        },
        screens: screens,
        colors: colors,
        spacing: spacing,
        animation: animation,
        backdropBlur: (theme) => theme('blur'),
        backdropBrightness: (theme) => theme('brightness'),
        backdropContrast: (theme) => theme('contrast'),
        backdropGrayscale: (theme) => theme('grayscale'),
        backdropHueRotate: (theme) => theme('hueRotate'),
        backdropInvert: (theme) => theme('invert'),
        backdropOpacity: (theme) => theme('opacity'),
        backdropSaturate: (theme) => theme('saturate'),
        backdropSepia: (theme) => theme('sepia'),
        backgroundColor: (theme) => theme('colors'),
        backgroundImage: backgroundImage,
        backgroundOpacity: (theme) => theme('opacity'),
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        blur: blur,
        brightness: brightness,
        borderColor: (theme) => ({
            ...theme('colors'),
            DEFAULT: theme('colors.gray.200', 'currentColor'),
        }),
        borderOpacity: (theme) => theme('opacity'),
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        boxShadow: boxShadow,
        caretColor: (theme) => theme('colors'),
        contrast: contrast,
        content: {
            none: 'none',
        },
        cursor: cursor,
        divideColor: (theme) => theme('borderColor'),
        divideOpacity: (theme) => theme('borderOpacity'),
        divideWidth: (theme) => theme('borderWidth'),
        dropShadow: dropShadow,
        fill: { current: 'currentColor' },
        grayscale: {
            0: '0',
            DEFAULT: '100%',
        },
        hueRotate: hueRotate,
        invert: {
            0: '0',
            DEFAULT: '100%',
        },
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            0: '0',
            DEFAULT: '1',
        },
        flexShrink: {
            0: '0',
            DEFAULT: '1',
        },
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        gap: (theme) => theme('spacing'),
        gradientColorStops: (theme) => theme('colors'),
        gridAutoColumns: gridAutoColumns,
        gridAutoRows: gridAutoRows,
        gridColumn: gridColum,
        gridColumnEnd: gridColumnEnd,
        gridColumnStart: gridColumnStart,
        gridRow: gridRow,
        gridRowStart: gridRowStart,
        gridRowEnd: gridRowEnd,
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
        height: height,
        inset: inset,
        keyframes: keyframes,
        letterSpacing: letterSpacing,
        lineHeight: lineHeight,
        listStyleType: listStyleType,
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        minHeight: minHeight,
        minWidth: minWidth,
        objectPosition: objectPosition,
        opacity: opacity,
        order: order,
        outline: outline,
        padding: (theme) => theme('spacing'),
        placeholderColor: (theme) => theme('colors'),
        placeholderOpacity: (theme) => theme('opacity'),
        ringColor: (theme) => ({
            DEFAULT: theme('colors.blue.500', '#3b82f6'),
            ...theme('colors'),
        }),
        ringOffsetColor: (theme) => theme('colors'),
        ringOffsetWidth: ringOffsetWidth,
        ringOpacity: (theme) => ({
            DEFAULT: '0.5',
            ...theme('opacity'),
        }),
        ringWidth: ringWidth,
        rotate: rotate,
        saturate: saturate,
        scale: scale,
        sepia: {
            0: '0',
            DEFAULT: '100%',
        },
        skew: skew,
        space: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        stroke: {
            current: 'currentColor',
        },
        strokeWidth: {
            0: '0',
            1: '1',
            2: '2',
        },
        textColor: (theme) => theme('colors'),
        textOpacity: (theme) => theme('opacity'),
        transformOrigin: transformOrigin,
        transitionDelay: transitionDelay,
        transitionDuration: transitionDuration,
        transitionProperty: transitionProperty,
        transitionTimingFunction: transitionTimingFunction,
        translate: translate,
        width: width,
        zIndex: zIndex,
    },
    variantOrder: [
        'first',
        'last',
        'odd',
        'even',
        'visited',
        'checked',
        'empty',
        'read-only',
        'group-hover',
        'group-focus',
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'disabled',
    ],
    variants: {
        accessibility: ['responsive', 'focus-within', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        animation: ['responsive'],
        appearance: ['responsive'],
        backdropBlur: ['responsive'],
        backdropBrightness: ['responsive'],
        backdropContrast: ['responsive'],
        backdropFilter: ['responsive'],
        backdropGrayscale: ['responsive'],
        backdropHueRotate: ['responsive'],
        backdropInvert: ['responsive'],
        backdropOpacity: ['responsive'],
        backdropSaturate: ['responsive'],
        backdropSepia: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundBlendMode: ['responsive'],
        backgroundClip: ['responsive'],
        backgroundColor: allEffect,
        backgroundImage: ['responsive'],
        backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        backgroundOrigin: ['responsive'],
        blur: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: allEffect,
        borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxDecorationBreak: ['responsive'],
        boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        boxSizing: ['responsive'],
        brightness: ['responsive'],
        clear: ['responsive'],
        container: ['responsive'],
        contrast: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        divideColor: ['responsive', 'dark'],
        divideOpacity: ['responsive', 'dark'],
        divideStyle: ['responsive'],
        divideWidth: ['responsive'],
        dropShadow: ['responsive'],
        fill: ['responsive'],
        filter: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontVariantNumeric: ['responsive'],
        fontWeight: allEffect,
        gap: ['responsive'],
        gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
        grayscale: ['responsive'],
        gridAutoColumns: ['responsive'],
        gridAutoFlow: ['responsive'],
        gridAutoRows: ['responsive'],
        gridColumn: ['responsive'],
        gridColumnEnd: ['responsive'],
        gridColumnStart: ['responsive'],
        gridRow: ['responsive'],
        gridRowEnd: ['responsive'],
        gridRowStart: ['responsive'],
        gridTemplateColumns: ['responsive'],
        gridTemplateRows: ['responsive'],
        height: ['responsive'],
        hueRotate: ['responsive'],
        inset: ['responsive'],
        invert: ['responsive'],
        isolation: ['responsive'],
        justifyContent: ['responsive'],
        justifyItems: ['responsive'],
        justifySelf: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        mixBlendMode: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: allEffect,
        order: ['responsive'],
        outline: ['responsive', 'focus-within', 'focus'],
        overflow: ['responsive'],
        overscrollBehavior: ['responsive'],
        padding: ['responsive'],
        placeContent: ['responsive'],
        placeItems: ['responsive'],
        placeSelf: ['responsive'],
        placeholderColor: ['responsive', 'dark', 'focus'],
        placeholderOpacity: ['responsive', 'dark', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
        ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
        ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
        ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
        ringWidth: ['responsive', 'focus-within', 'focus'],
        rotate: ['responsive', 'hover', 'focus'],
        saturate: ['responsive'],
        scale: allEffect,
        sepia: ['responsive'],
        skew: ['responsive', 'hover', 'focus'],
        space: ['responsive'],
        stroke: ['responsive'],
        strokeWidth: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: allEffect,
        textDecoration: allEffect,
        textOpacity: allEffect,
        textOverflow: ['responsive'],
        textTransform: ['responsive'],
        transform: allEffect,
        transformOrigin: ['responsive'],
        transitionDelay: ['responsive'],
        transitionDuration: ['responsive'],
        transitionProperty: ['responsive'],
        transitionTimingFunction: ['responsive'],
        translate: ['responsive', 'hover', 'focus'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive', 'focus-within', 'focus'],
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ]
};
