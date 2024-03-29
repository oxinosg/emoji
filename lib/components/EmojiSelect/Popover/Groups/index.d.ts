import { Component, ComponentType, ReactElement, WheelEvent } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';
import { EmojiImageProps, EmojiPluginTheme, EmojiSelectGroup } from '../../../../index';
import { EmojiStrategy } from '../../../../utils/createEmojisFromStrategy';
import Entry from '../Entry';
interface GroupsProps {
    activeGroup?: number;
    theme: EmojiPluginTheme;
    groups: EmojiSelectGroup[];
    emojis: EmojiStrategy;
    checkMouseDown(): boolean;
    onEmojiSelect(emoji: string): void;
    onEmojiMouseDown(entryComponent: Entry, toneSet: string[] | null): void;
    onGroupScroll(activeGroup: number): void;
    emojiImage: ComponentType<EmojiImageProps>;
    isOpen: boolean;
}
export default class Groups extends Component<GroupsProps> {
    static propTypes: {
        theme: PropTypes.Validator<object>;
        groups: PropTypes.Validator<(object | null | undefined)[]>;
        emojis: PropTypes.Validator<object>;
        checkMouseDown: PropTypes.Validator<(...args: any[]) => any>;
        onEmojiSelect: PropTypes.Validator<(...args: any[]) => any>;
        onEmojiMouseDown: PropTypes.Validator<(...args: any[]) => any>;
        onGroupScroll: PropTypes.Validator<(...args: any[]) => any>;
        isOpen: PropTypes.Requireable<boolean>;
    };
    state: {
        activeGroup: number;
    };
    scrollbars?: Scrollbars | null;
    container?: HTMLDivElement | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    onScroll: (values: positionValues) => void;
    onWheel: (event: WheelEvent<HTMLDivElement>) => void;
    scrollToGroup: (groupIndex: number) => void;
    calculateBounds: () => void;
    isRenderedGroupActive: (index: number) => boolean;
    render(): ReactElement;
}
export {};
