import TextButton from './TextButton';
import OutlineButton from './OutlineButton';
import SolidButton from './SolidButton';
import QuickReply from './QuickReply';

let Button;

// solid style
Button = SolidButton;
Button.displayName = 'Button';

// outline style
Button.Outline = OutlineButton;
Button.Outline.displayName = 'Button.Outline';

// text style
Button.Text = TextButton;
Button.Text.displayName = 'Button.Text';

// quick reply style
Button.QuickReply = QuickReply;
Button.QuickReply.displayName = 'Button.QuickReply';


export default Button;