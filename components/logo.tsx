import { motion } from "framer-motion";

export default function Logo() {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1
            }}
            className="w-[200px] h-[200px] mx-auto"
        >
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} fillRule="evenodd" clipRule="evenodd" d="M119.801 86C116.3 104.903 105.374 115.518 87.0234 119.065C105.487 122.613 116.272 133.37 119.801 152.074C123.414 133.313 134.284 122.471 152.691 119.065C134.312 115.688 123.443 104.817 119.801 86ZM119.837 258.74C106.709 258.74 96.0938 252.524 96.0938 244.833V160.311H143.58V226H132.023V250.07H141.832C138.294 255.148 129.772 258.74 119.837 258.74ZM152.023 230H136.023V246H152.023V230ZM262.266 110.068H286.206V134.138H262.266V110.068ZM310.019 86H286.078V110.068H310.019V86ZM179.023 235H202.963V259.07H179.023V235ZM185.023 216H173.023V228H185.023V216ZM262.394 186.149V158.546H286.138V134.489H310.023V227C310.023 249.61 296.419 259 281.294 259C274.731 259 268.422 257.468 260.366 249.865L204.963 199.783V200.07H181.023V180H157.023V156.447V156V91L157.249 91.1889C157.845 91.6886 158.426 92.176 159.051 92.7305L262.394 186.149ZM203.023 208H195.023V216H203.023V208ZM157.023 192H173.023V208H157.023V192Z" fill="url(#paint0_linear_5388_66074)" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} d="M89.28 285.516V312.276H81V285.516H89.28Z" fill="url(#paint1_linear_5388_66074)" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} d="M125.555 312.716C124.515 312.716 123.515 312.476 122.235 311.276L105.835 296.556V312.276H98.3147V290.076C98.3147 286.516 100.475 285.076 102.835 285.076C103.835 285.076 104.835 285.316 106.155 286.516L122.555 301.236V285.516H130.115V307.676C130.115 311.236 127.955 312.716 125.555 312.716Z" fill="url(#paint2_linear_5388_66074)" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} d="M136.917 285.516H147.077L159.117 303.276L171.677 285.516H181.437L164.317 309.716C163.157 311.276 161.517 312.716 158.957 312.716C156.477 312.716 154.837 311.396 153.677 309.716L136.917 285.516Z" fill="url(#paint3_linear_5388_66074)" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} d="M196.788 285.516V312.276H188.508V285.516H196.788Z" fill="url(#paint4_linear_5388_66074)" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} d="M233.223 285.516H243.943L235.503 293.236C231.783 296.596 230.542 297.676 229.542 298.436C230.502 299.076 231.703 300.196 236.023 304.236L244.583 312.276H232.902L223.783 303.436L214.383 312.276H204.103L212.822 304.236C216.902 300.476 218.062 299.516 219.062 298.756C218.062 298.036 217.022 297.116 212.822 293.196L204.622 285.516H216.102L224.622 293.836L233.223 285.516Z" fill="url(#paint5_linear_5388_66074)" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} d="M259.864 305.396H282.624L277.304 312.276H251.544V285.516H282.544L277.184 292.476H259.864V295.676H281.064L276.304 301.756H259.864V305.396Z" fill="url(#paint6_linear_5388_66074)" />
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} d="M297.73 305.396H318.45L313.09 312.276H289.45V285.516H297.73V305.396Z" fill="url(#paint7_linear_5388_66074)" />
                <defs>
                    <linearGradient id="paint0_linear_5388_66074" x1="198.523" y1="86" x2="198.523" y2="259.07" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_5388_66074" x1="199.725" y1="285.076" x2="199.725" y2="312.716" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_5388_66074" x1="199.725" y1="285.076" x2="199.725" y2="312.716" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_5388_66074" x1="199.725" y1="285.076" x2="199.725" y2="312.716" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_5388_66074" x1="199.725" y1="285.076" x2="199.725" y2="312.716" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_5388_66074" x1="199.725" y1="285.076" x2="199.725" y2="312.716" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_5388_66074" x1="199.725" y1="285.076" x2="199.725" y2="312.716" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_5388_66074" x1="199.725" y1="285.076" x2="199.725" y2="312.716" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0078D0" />
                        <stop offset="0.25" stopColor="#0069B7" />
                        <stop offset="0.5" stopColor="#005A9D" />
                        <stop offset="1" stopColor="#003D6A" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div >
    )
}