import { Component, ComponentType, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { EmojiImageProps, EmojiPluginTheme } from '../../../../index';
interface Boundaries {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}
interface ToneSelectParams {
    theme: EmojiPluginTheme;
    bounds: {
        areaBounds: Boundaries;
        entryBounds: Boundaries;
    };
    onEmojiSelect(emoji: string): void;
    toneSet: string[] | null;
    emojiImage: ComponentType<EmojiImageProps>;
}
export default class ToneSelect extends Component<ToneSelectParams> {
    static propTypes: {
        theme: PropTypes.Validator<object>;
        bounds: PropTypes.Validator<PropTypes.InferProps<{
            areaBounds: PropTypes.Validator<PropTypes.InferProps<{
                left: PropTypes.Validator<number>;
                right: PropTypes.Validator<number>;
                top: PropTypes.Validator<number>;
                bottom: PropTypes.Validator<number>;
                width: PropTypes.Validator<number>;
                height: PropTypes.Validator<number>;
            }>>;
            entryBounds: PropTypes.Validator<PropTypes.InferProps<{
                left: PropTypes.Validator<number>;
                right: PropTypes.Validator<number>;
                top: PropTypes.Validator<number>;
                bottom: PropTypes.Validator<number>;
                width: PropTypes.Validator<number>;
                height: PropTypes.Validator<number>;
            }>>;
        }>>;
        onEmojiSelect: PropTypes.Validator<(...args: any[]) => any>;
    };
    tones?: HTMLUListElement | null;
    componentDidMount(): void;
    setCorrectPosition: (areaBounds: Boundaries, entryBounds: Boundaries) => void;
    render(): ReactElement;
}
export {};
