import final from "./data/final";
import step1 from "./data/step-1";
import step10 from "./data/step-10";
import step11 from "./data/step-11";
import step12 from "./data/step-12";
import step13 from "./data/step-13";
import step14 from "./data/step-14";
import step15 from "./data/step-15";
import step16 from "./data/step-16";
import step17 from "./data/step-17";
import step18 from "./data/step-18";
import step2 from "./data/step-2";
import step20 from "./data/step-20";
import step21 from "./data/step-21";
import step22C from "./data/step-22-c";
import step23C from "./data/step-23-c";
import step24C from "./data/step-24-c";
import step25C from "./data/step-25-c";
import step26C from "./data/step-26-c";
import step27 from "./data/step-27";
import step28 from "./data/step-28";
import step29 from "./data/step-29";
import step3 from "./data/step-3";
import step30 from "./data/step-30";
import step31 from "./data/step-31";
import step32 from "./data/step-32";
import step33 from "./data/step-33";
import step34 from "./data/step-34";
import step35 from "./data/step-35";
import step36 from "./data/step-36";
import step37 from "./data/step-37";
import step38 from "./data/step-38";
import step39 from "./data/step-39";
import step4 from "./data/step-4";
import step40 from "./data/step-40";
import step41 from "./data/step-41";
import step5 from "./data/step-5";
import step6 from "./data/step-6";
import step7 from "./data/step-7";
import step8 from "./data/step-8";
import step9 from "./data/step-9";

export const generate = (data: any[]) => {
  const shuffled = [...data];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const steps = [
  step1,
  step2,
  ...generate([
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
    step9,
    step10,
    step11,
    step12,
    step13,
    step14,
    step15,
    step16,
    step17,
    step18,
    step20,
    step21,
    step27,
    step28,
    step29,
    step30,
    step31,
    step32,
    step33,
    step34,
    step35,
    step36,
    step37,
    step38,
    step39,
    step40,
    step41
  ]),
  step22C,
  ...generate([
    step23C,
    step24C,
    step25C,
    step26C,
  ]),
  final,
];
