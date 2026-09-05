import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-aoba",
  slug: "aoba",
  title: "Aoba",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 9,
    "lines": [
      {
        "id": "ch0288_memoriallobby_1",
        "text": {
          "zh-cn": "您，您先不要过来……哇啊……！",
          "ja": "こ、来ないで\nほしいんです……\nけど……！",
          "ko": "여, 여기\n오지 말아주세요……\n으아……!",
          "en": "D-Don't come in here... Ugh...!"
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 26.33333396911621,
    "lines": [
      {
        "id": "ch0288_memoriallobby_2_1",
        "text": {
          "zh-cn": "我，我衣服上……",
          "ja": "ふ、服に……っ！",
          "ko": "오, 옷에……서……",
          "en": "M-My...clothes..."
        }
      },
      {
        "id": "ch0288_memoriallobby_2_2",
        "text": {
          "zh-cn": "有很重的机油味……很，很难闻的……",
          "ja": "油の匂いが\nついちゃうんで……\nよ、よくないんで……！",
          "ko": "기, 기름 냄새가\n많이 나서요……\n조, 좋지 않아요……",
          "en": "...they reek of o-oil... Not... Not good at all..."
        }
      },
      {
        "id": "ch0288_memoriallobby_2_3",
        "text": {
          "zh-cn": "我，我马上就脱掉……您，您在那边……稍等一下……！",
          "ja": "す、すぐ脱ぐので……\nそ、そこで待ってて……\nくださいっ！",
          "ko": "그, 금방 벗을 테니까……\n그, 거기서 기다려주세요……!",
          "en": "I-I'm just going to take these off... So, please...wait right there...!"
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 10.500000953674316,
    "lines": [
      {
        "id": "ch0288_memoriallobby_3",
        "text": {
          "zh-cn": "诶？那是……什么意思……",
          "ja": "え？ 一体……\nどういう……？",
          "ko": "예?\n그게 무슨 말씀……",
          "en": "Huh? What...do you mean...?"
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 21.666667938232422,
    "lines": [
      {
        "id": "ch0288_memoriallobby_4_1",
        "text": {
          "zh-cn": "……呃……就是说……",
          "ja": "あっ……えっと……",
          "ko": "……어…… 그러니까……",
          "en": "...Uh... So..."
        }
      },
      {
        "id": "ch0288_memoriallobby_4_2",
        "text": {
          "zh-cn": "……啊啊啊？！那，那个！！",
          "ja": "あああっ！？\nそ、そのっ！",
          "ko": "……아아앗?! 그, 그게!!",
          "en": "...Aah?! W-Well!!!"
        }
      },
      {
        "id": "ch0288_memoriallobby_4_3",
        "text": {
          "zh-cn": "呜，呜哇啊啊啊！！",
          "ja": "う、うわぁああああっ！",
          "ko": "우, 우와아아앗!!",
          "en": "W-Waahh!!!"
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
