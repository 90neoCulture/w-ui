const Button = () => import('../../examples/Button/index.vue');
const Icon = () => import('../../examples/Icon/index.vue');
const Grid = () => import('../../examples/Grid/index.vue');
const Layout = () => import('../../examples/Layout/index.vue');
const Affix = () => import('../../examples/Affix/index.vue');
const Breadcrumb = () => import('../../examples/Breadcrumb/index.vue');
const Dropdown = () => import('../../examples/Dropdown/index.vue');
const Menu = () => import('../../examples/Menu/index.vue');
const PageHeader = () => import('../../examples/PageHeader/index.vue');
const Pagination = () => import('../../examples/Pagination/index.vue');
const Steps = () => import('../../examples/Steps/index.vue');
const AutoComplete = () => import('../../examples/AutoComplete/index.vue');
const Cascader = () => import('../../examples/Cascader/index.vue');
const Checkbox = () => import('../../examples/Checkbox/index.vue');
const DatePicker = () => import('../../examples/DatePicker/index.vue');
const Form = () => import('../../examples/Form/index.vue');
const FormModel = () => import('../../examples/FormModel/index.vue');
const Input = () => import('../../examples/Input/index.vue');
const InputNumber = () => import('../../examples/InputNumber/index.vue');
const Mentions = () => import('../../examples/Mentions/index.vue');
const Radio = () => import('../../examples/Radio/index.vue');
const Rate = () => import('../../examples/Rate/index.vue');
const Select = () => import('../../examples/Select/index.vue');
const Slider = () => import('../../examples/Slider/index.vue');
const Switch = () => import('../../examples/Switch/index.vue');
const TimePicker = () => import('../../examples/TimePicker/index.vue');
const Transfer = () => import('../../examples/Transfer/index.vue');
const TreeSelect = () => import('../../examples/TreeSelect/index.vue');
const Upload = () => import('../../examples/Upload/index.vue');
const Avatar = () => import('../../examples/Avatar/index.vue');
const Badge = () => import('../../examples/Badge/index.vue');
const Calendar = () => import('../../examples/Calendar/index.vue');
const Card = () => import('../../examples/Card/index.vue');
const Carousel = () => import('../../examples/Carousel/index.vue');
const Collapse = () => import('../../examples/Collapse/index.vue');
const Comment = () => import('../../examples/Comment/index.vue');
const Descriptions = () => import('../../examples/Descriptions/index.vue');
const Empty = () => import('../../examples/Empty/index.vue');
const List = () => import('../../examples/List/index.vue');
const Popover = () => import('../../examples/Popover/index.vue');
const Statistic = () => import('../../examples/Statistic/index.vue');
const Table = () => import('../../examples/Table/index.vue');
const Tabs = () => import('../../examples/Tabs/index.vue');
const Tag = () => import('../../examples/Tag/index.vue');
const Timeline = () => import('../../examples/Timeline/index.vue');
const Tooltip = () => import('../../examples/Tooltip/index.vue');
const Tree = () => import('../../examples/Tree/index.vue');
const Alert = () => import('../../examples/Alert/index.vue');
const Drawer = () => import('../../examples/Drawer/index.vue');
const Message = () => import('../../examples/Message/index.vue');
const Modal = () => import('../../examples/Modal/index.vue');
const Notification = () => import('../../examples/Notification/index.vue');
const Popconfirm = () => import('../../examples/Popconfirm/index.vue');
const Progress = () => import('../../examples/Progress/index.vue');
const Result = () => import('../../examples/Result/index.vue');
const Skeleton = () => import('../../examples/Skeleton/index.vue');
const Spin = () => import('../../examples/Spin/index.vue');
const Anchor = () => import('../../examples/Anchor/index.vue');
const BackTop = () => import('../../examples/BackTop/index.vue');
const ConfigProvider = () => import('../../examples/ConfigProvider/index.vue');
const Divider = () => import('../../examples/Divider/index.vue');
const LocaleProvider = () => import('../../examples/LocaleProvider/index.vue');

export const comps = [
  { path: '/button', name: 'button', component: Button },
  { path: '/icon', name: 'icon', component: Icon },
  { path: '/grid', name: 'grid', component: Grid },
  { path: '/layout', name: 'layout', component: Layout },
  { path: '/affix', name: 'affix', component: Affix },
  { path: '/breadcrumb', name: 'breadcrumb', component: Breadcrumb },
  { path: '/dropdown', name: 'dropdown', component: Dropdown },
  { path: '/menu', name: 'menu', component: Menu },
  { path: '/pageHeader', name: 'pageHeader', component: PageHeader },
  { path: '/pagination', name: 'pagination', component: Pagination },
  { path: '/steps', name: 'steps', component: Steps },
  { path: '/autoComplete', name: 'autoComplete', component: AutoComplete },
  { path: '/cascader', name: 'cascader', component: Cascader },
  { path: '/checkbox', name: 'checkbox', component: Checkbox },
  { path: '/datePicker', name: 'datePicker', component: DatePicker },
  { path: '/form', name: 'form', component: Form },
  { path: '/formModel', name: 'formModel', component: FormModel },
  { path: '/input', name: 'input', component: Input },
  { path: '/inputNumber', name: 'inputNumber', component: InputNumber },
  { path: '/mentions', name: 'mentions', component: Mentions },
  { path: '/radio', name: 'radio', component: Radio },
  { path: '/rate', name: 'rate', component: Rate },
  { path: '/select', name: 'select', component: Select },
  { path: '/slider', name: 'slider', component: Slider },
  { path: '/switch', name: 'switch', component: Switch },
  { path: '/timePicker', name: 'timePicker', component: TimePicker },
  { path: '/transfer', name: 'transfer', component: Transfer },
  { path: '/treeSelect', name: 'treeSelect', component: TreeSelect },
  { path: '/upload', name: 'upload', component: Upload },
  { path: '/avatar', name: 'avatar', component: Avatar },
  { path: '/badge', name: 'badge', component: Badge },
  { path: '/calendar', name: 'calendar', component: Calendar },
  { path: '/card', name: 'card', component: Card },
  { path: '/carousel', name: 'carousel', component: Carousel },
  { path: '/collapse', name: 'collapse', component: Collapse },
  { path: '/comment', name: 'comment', component: Comment },
  { path: '/descriptions', name: 'descriptions', component: Descriptions },
  { path: '/empty', name: 'empty', component: Empty },
  { path: '/list', name: 'list', component: List },
  { path: '/popover', name: 'popover', component: Popover },
  { path: '/statistic', name: 'statistic', component: Statistic },
  { path: '/table', name: 'table', component: Table },
  { path: '/tabs', name: 'tabs', component: Tabs },
  { path: '/tag', name: 'tag', component: Tag },
  { path: '/timeline', name: 'timeline', component: Timeline },
  { path: '/tooltip', name: 'tooltip', component: Tooltip },
  { path: '/tree', name: 'tree', component: Tree },
  { path: '/alert', name: 'alert', component: Alert },
  { path: '/drawer', name: 'drawer', component: Drawer },
  { path: '/message', name: 'message', component: Message },
  { path: '/modal', name: 'modal', component: Modal },
  { path: '/notification', name: 'notification', component: Notification },
  { path: '/popconfirm', name: 'popconfirm', component: Popconfirm },
  { path: '/progress', name: 'progress', component: Progress },
  { path: '/result', name: 'result', component: Result },
  { path: '/skeleton', name: 'skeleton', component: Skeleton },
  { path: '/spin', name: 'spin', component: Spin },
  { path: '/anchor', name: 'anchor', component: Anchor },
  { path: '/backTop', name: 'backTop', component: BackTop },
  {
    path: '/configProvider',
    name: 'configProvider',
    component: ConfigProvider
  },
  { path: '/divider', name: 'divider', component: Divider },
  {
    path: '/localeProvider',
    name: 'localeProvider',
    component: LocaleProvider
  },
];

export default comps;
