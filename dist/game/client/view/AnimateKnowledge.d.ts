import { HintUpdate } from './HintUpdate';
import { OpponentBoardView } from './subview/OpponentBoardView';
import { OpponentPasswordView } from './subview/OpponentPasswordView';
import { YourBoardView } from './subview/YourBoardView';
import { YourPasswordView } from './subview/YourPasswordView';
export declare function AnimateHint(update: HintUpdate, yourBoard: YourBoardView, opponentBoard: OpponentBoardView, yourPassword: YourPasswordView, opponentPassword: OpponentPasswordView, updateComplete: () => void): void;
