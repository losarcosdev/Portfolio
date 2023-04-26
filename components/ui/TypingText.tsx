import { textContainer, textVariant2 } from "@/utils";
import { motion } from "framer-motion";

interface TextProps {
  title?: any;
  textStyles?: string;
}

export const TypingText = ({ textStyles, title }: TextProps) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-slate-500 ${textStyles}`}
    >
      {Array.from(title as string).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
