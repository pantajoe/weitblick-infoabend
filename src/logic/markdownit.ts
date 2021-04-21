import MarkdownIt, { Options, PresetName } from 'markdown-it';

export function useMarkdownIt(presetName: PresetName, options?: Options): MarkdownIt;
export function useMarkdownIt(options: Options): MarkdownIt;
export function useMarkdownIt(): MarkdownIt;
export function useMarkdownIt(presetNameOrOptions?: PresetName | Options, options?: Options): MarkdownIt {
  if (typeof presetNameOrOptions === 'undefined') return new MarkdownIt();
  if (typeof presetNameOrOptions === 'object') return new MarkdownIt(presetNameOrOptions);

  return new MarkdownIt(presetNameOrOptions, options);
}
