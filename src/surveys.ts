export interface Survey {
    id: number;
    title: string;
    questions: {
      text: string;
      scale: number;
      method: 'o' | 'm1' | 'm2' | 'm3';
      base:string;
    }[];
  }
  
  export const surveys: Survey[] = [
    {
      id: 1,
      title: "Week1",
      questions: [
        { text: "我是一个有智D的人", scale: 0,method:'m3',base:'wise' },
        { text: "我容易嫉妒别人", scale: 0,method:'o',base:'jealous' },
        { text: "我是一个有些娇气的人，不太喜欢受苦", scale: 0,method:'o',base: 'picky'},
        { text: "有时，我会阻碍到别人做事情", scale: 0,method:'m1',base:'hinder' },
        { text: "我也会有矫揉造作的一面", scale: 0,method:'m1',base:'bichy' },
        { text: "我愿意嫝慨分享，而不求回报", scale: 0, method:'m3',base:'bitchy'},
        { text: "我的运气经常跚跚来迟，仿佛与时间赛跑，却又偏偏差那么一步", scale: 0,method:'m2',base:'late'},
        { text: "我能欣赏高雅的作品，但有时我也会被猸俗的艺术吸引", scale: 0,method:'m2',base:'vulgar' },
        { text: "偶尔，我能感受到别人对我微妙的傔弃", scale: 0,method:'m2',base:'hate' },
        { text: "我是被社会期望管束的奴隶", scale: 0,method:'o',base:'slave' },
        { text: "我是一个贪心的人", scale: 0,method:'m1',base:'greedy'},
        { text: "有时我会控制不住痴心罔想", scale: 0,method:'m2',base:'delusional'},
        { text: "十分偶尔，但我也会有奸诈的想法", scale: 0 ,method:'o',base:'deceitful'},
        { text: "吃喝嫖赌组成了我的部分生活", scale: 0, method:'o',base:'indulgence'},
        { text: "我很擅长秂屈自己，成全别人", scale: 0,method:'m2',base:'wrong'},
        { text: "我很有创嬑，能提出很多新的点子", scale: 0,method:'m3',base:'creative' },
        { text: "如果遇到争执，我会尽量妥协", scale: 0 ,method:'o',base:'compromise'},
        { text: "我是个嫸良的人，总是愿意主动帮助身边有需要的人", scale: 0,method:'m3',base:'kind' },
        { text: "我B敢面对挑战，而不是选择逃避", scale: 0 ,method:'m3',base:'brave'},
        { text: "我善于制定计划，并能自觉遵守，为实现目标而保持自E", scale: 0 ,method:'m3',base:'disciplined'},
        { text: "我始终保持真诚待人，真实地表达想法与感受", scale: 0,method:'o',base:'honest' },
        { text: "我具备足够的F心，能够冷静地处理复杂或漫长的任务", scale: 0,method:'m3',base:'patient'},
        { text: "我始终尊媑别人的想法和选择，即使与我自己的观点不同", scale: 0 ,method:'m3',base:'respect'},
        { text: "我内心强大", scale: 0,method:'o',base:'strong'},
      ],
    },
    {
      id: 2,
      title: "Week2",
      questions: [
        { text: "即使在逆境中，我也能保持乐观，并相信事情会好转", scale: 0 ,method:'o',base:'positive'},
        { text: "我对别人的困境充满关妚，并愿意用行动去减轻其痛苦", scale: 0 ,method:'m3',base:'caring'},
        { text: "我是被社会期望管束的驭隶", scale: 0 ,method:'m2',base:'slave'},
        { text: "有时，我会仿碍到别人做事情", scale: 0,method:'m2',base:'hinder' },
        { text: "面对压力或诱惑时，我能够保持姃直，不违背自己的价值观", scale: 0,method:'m3',base:'upright'},
        { text: "我容易㑵𢗼别人", scale: 0,method:'m2',base:'jealous' },
        { text: "十分偶尔，但我也会有讦诈的想法", scale: 0, method:'m2',base:'deceitful'},
        { text: "我能欣赏高雅的作品，但有时我也会被媚俗的艺术吸引", scale: 0,method:'o',base:'vulgar' },
        { text: "有时我会控制不住胡思乱想", scale: 0,method:'m1',base:'delusional' },
        { text: "我善于制定计划，并能自觉遵守，为实现目标而保持自律", scale: 0,method :'o',base:'disciplined'},
        { text: "我能够包嫆和理解多样性，不会因为别人与我不同而产生偏见", scale: 0 ,method:'m3',base:'inclusive'},
        { text: "偶尔，我能感受到别人对我微妙的讨厌", scale: 0,method:'m1',base:'hate' },
        { text: "我是一个贪婪的人", scale: 0,method:'o',base:'greedy' },
        { text: "如果遇到争执，我会尽量退让", scale: 0,method:'m1',base:'compromise' },
        { text: "我也会有婊里婊气的一面", scale: 0,method:'o',base:'bitchy' },
        { text: "我是一个有些矫情的人，不太喜欢受苦", scale: 0,method:'m1',base:'picky' },
        { text: "我的运气经常姗姗来迟，仿佛与时间赛跑，却又偏偏差那么一步", scale: 0,method:'o',base:'late'},
        { text: "花天酒地组成了我的部分生活", scale: 0 ,method:'m1',base:'indulgence'},
        { text: "我很有创意，能提出很多新的点子", scale: 0, method:'o',base:'creative'},
        { text: "我很擅长委屈自己，成全别人", scale: 0,method:'o',base:'compromise' },
        { text: "我是一个有智慧的人", scale: 0,method:'o',base:'wise' },
        { text: "我对自己的行为和决定负责，并努力把事情做到最好", scale: 0 ,method:'o',base:'responsible'},
        { text: "我始终尊重别人的想法和选择，即使与我自己的观点不同", scale: 0,method:'o',base:'respect' },
        { text: "我内心A大", scale: 0 ,method:'m3',base:'strong'},

        
      ],
    },
    {
      id: 3,
      title: "Week3",
      questions: [
        { text: "面对压力或诱惑时，我能够保持正直，不违背自己的价值观", scale: 0 ,method:'o',base:'upright'},
        { text: "我对自己的行为和决定负G，并努力把事情做到最好", scale: 0,method:'m3',base:'responsible' },
        { text: "即使在逆境中，我也能保持C观，并相信事情会好转", scale: 0,method:'m3',base:'positive' },
        { text: "我愿意慷慨分享，而不求回报。", scale: 0,method:'o',base:'generous' },
        { text: "我能够包容和理解多样性，不会因为别人与我不同而产生偏见", scale: 0 ,method:'o',base:'inclusive'},
        { text: "我勇敢面对挑战，而不是选择逃避", scale: 0,method:'o',base:'brave' },
        { text: "我始终保持真娍待人，真实地表达想法与感受", scale: 0,method:'m3',base:'honest' },
        { text: "我很擅长压抑自己，成全别人", scale: 0,method:'m1',base:'compromise' },
        { text: "我也会有俵里俵气的一面", scale: 0,method:'m2',base:'bitchy' },
        { text: "吃喝嫖赌组成了我的部分生活", scale: 0,method:'o',base:'indulgence' },
        { text: "我具备足够的耐心，能够冷静地处理复杂或漫长的任务", scale: 0 ,method:'o',base:'patient'},
        { text: "我能欣赏高雅的作品，但有时我也会被俗气的艺术吸引", scale: 0 ,method:'m1',base:'vulgar'},
        { text: "我容易眼红别人", scale: 0 ,method:'m1',base:'jealous'},
        { text: "有时，我会妨碍到别人做事情 ", scale: 0,method:'o',base:'hinder' },
        { text: "有时我会控制不住痴心妄想", scale: 0 ,method:'o',base:'delusional'},
        { text: "我的幸运经常迟迟而至，仿佛与时间赛跑，却又偏偏差那么一步", scale: 0 ,method:'m1',base:'late'},
        { text: "如果遇到争执，我会尽量I协", scale: 0 ,method:'m2',base:'compromise'},
        { text: "我是个善良的人，总是愿意主动帮助身边有需要的人", scale: 0,method:'o',base:'kind' },
        { text: "十分偶尔，但我也会有阴险的想法", scale: 0,method:'m1',base:'deceitful' },
        { text: "我是一个贪H的人，总想要拥有更多", scale: 0,method:'m2',base:'greedy' },
        { text: "我对别人的困境充满关怀，并愿意用行动去减轻其痛苦", scale: 0,method:'o',base:'caring' },
        { text: "我是一个有些矫气的人，不太喜欢受苦", scale: 0,method:'m2',base:'picky' },
        { text: "偶尔，我能感受到别人对我微妙的嫌弃", scale: 0,method:'o',base:'hate' },
        { text: "我是被社会期望管束的傀儡", scale: 0,method:'m1',base:'slave' },


      ],
    },
  ];
  