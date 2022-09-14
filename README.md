# svelte-heroicons

Yet another Svelte wrapper for [Heroicons](https://heroicons.com). 

This library differs from others in a couple main ways:
* The icon components forward common event listeners to the underlying SVG, so you may use `on:click` and so on;
* The API is closer to the official React wrappers, making it easier to use when converting [Tailwind UI](https://tailwindui.com/) components to Svelte in conjunction with [svelte-headlessui](https://github.com/rgossiaux/svelte-headlessui);
* It's based on the latest version of Heroicons (at time of writing), **2.0.11**

# Installation

```
npm install -D @rgossiaux/svelte-heroicons
```

# Usage

Heroicons contains three types of icons: outline, solid and mini. They can be imported from `@rgossiaux/svelte-heroicons/outline`, `@rgossiaux/svelte-heroicons/solid` and `@rgossiaux/svelte-heroicons/mini` respectively.

All icon names are CamelCased and end with the word `Icon`; for example, the `academic-cap` icon on heroicons.com is imported as `AcademicCapIcon`.

```svelte

<script>
  import { MegaphoneIcon } from "@rgossiaux/svelte-heroicons/solid";
  import { CheckIcon } from "@rgossiaux/svelte-heroicons/outline";
  import { ChatBubbleLeftIcon } from "@rgossiaux/svelte-heroicons/mini"
</script>

<CheckIcon />
<MegaphoneIcon class="my-class" aria-hidden="true" />
<ChatBubbleLeftIcon />

```

# Upgrading to v2

With the new release of hericons, there are some breaking changes to be aware of. 

See the [heroicons v2 release notes](https://github.com/tailwindlabs/heroicons/releases/tag/v2.0.0) for additional information.

## New Icon Styles
There are now 3 styles of icons to choose from instead of 2 

- Outline — line icons with a 1.5px stroke, drawn in a 24px view box.
- Solid — solid icons with filled shapes, drawn in a 24px view box.
- Mini — solid icons with filled shapes, drawn in a 20px view box.

Note: The old `Solid` with the view box size of 20px was essentially renamed to `Mini` in v2.

## Icons Renamed

Many icons were renamed to more literal names. For exmaple, `MailIcon` has been renamed to `EnvelopeIcon`, and `SearchIcon` has been renamed to `MagnifyingGlassIcon`.

| Old Name | New Name |
| -------- | ------ |
|AdjustmentsIcon|AdjustmentsVerticalIcon|
|AnnotationIcon|ChatBubbleBottomCenterTextIcon|
|ArchiveIcon|ArchiveBoxIcon|
|ArrowCircleDownIcon|ArrowDownCircleIcon|
|ArrowCircleLeftIcon|ArrowLeftCircleIcon|
|ArrowCircleRightIcon|ArrowRightCircleIcon|
|ArrowCircleUpIcon|ArrowUpCircleIcon|
|ArrowNarrowDownIcon|ArrowLongDownIcon|
|ArrowNarrowLeftIcon|ArrowLongLeftIcon|
|ArrowNarrowRightIcon|ArrowLongRightIcon|
|ArrowNarrowUpIcon|ArrowLongUpIcon|
|ArrowSmLeftIcon|ArrowSmallLeftIcon|
|ArrowSmRightIcon|ArrowSmallRightIcon|
|ArrowSmUpIcon|ArrowSmallUpIcon|
|ArrowSmDownIcon|ArrowSmallDownIcon|
|ArrowsExpandIcon|ArrowsPointingOutIcon|
|BadgeCheckIcon|CheckBadgeIcon|
|BanIcon|NoSymbolIcon|
|BookmarkAltIcon|BookmarkSquareIcon|
|CashIcon|BanknotesIcon|
|ChartSquareBarIcon|ChartBarSquareIcon|
|ChatAlt2Icon|ChatBubbleLeftRightIcon|
|ChatAltIcon|ChatBubbleLeftEllipsisIcon|
|ChatIcon|ChatBubbleOvalLeftEllipsisIcon|
|ChipIcon|CpuChipIcon|
|ClipboardCheckIcon|ClipboardDocumentCheckIcon|
|ClipboardCopyIcon|ClipboardDocumentIcon|
|ClipboardListIcon|ClipboardDocumentListIcon|
|CloudDownloadIcon|CloudArrowDownIcon|
|CloudUploadIcon|CloudArrowUpIcon|
|CodeIcon|CodeBracketIcon|
|CollectionIcon|RectangleStackIcon|
|ColorSwatchIcon|SwatchIcon|
|CursorClickIcon|CursorArrowRaysIcon|
|DatabaseIcon|CircleStackIcon|
|DesktopComputerIcon|ComputerDesktopIcon|
|DeviceMobileIcon|DevicePhoneMobileIcon|
|DocumentAddIcon|DocumentPlusIcon|
|DocumentDownloadIcon|DocumentArrowDownIcon|
|DocumentRemoveIcon|DocumentMinusIcon|
|DocumentReportIcon|DocumentChartBarIcon|
|DocumentSearchIcon|DocumentMagnifyingGlassIcon|
|DotsCircleHorizontalIcon|EllipsisHorizontalCircleIcon|
|DotsHorizontalIcon|EllipsisHorizontalIcon|
|DotsVerticalIcon|EllipsisVerticalIcon|
|DownloadIcon|ArrowDownTrayIcon|
|DuplicateIcon|Square2StackIcon|
|EmojiHappyIcon|FaceSmileIcon|
|EmojiSadIcon|FaceFrownIcon|
|ExternalLinkIcon|ArrowTopRightOnSquareIcon|
|ExclamationIcon|ExclamationTriangleIcon|
|EyeOffIcon|EyeSlashIcon|
|FastForwardIcon|ForwardIcon|
|FilterIcon|FunnelIcon|
|FolderAddIcon|FolderPlusIcon|
|FolderDownloadIcon|FolderArrowDownIcon|
|FolderRemoveIcon|FolderMinusIcon|
|GlobeIcon|GlobeAmericasIcon|
|HandIcon|HandRaisedIcon|
|InboxInIcon|InboxArrowDownIcon|
|LibraryIcon|BuildingLibraryIcon|
|LightningBoltIcon|BoltIcon|
|LocationMarkerIcon|MapPinIcon|
|LoginIcon|ArrowLeftOnRectangleIcon|
|LogoutIcon|ArrowRightOnRectangleIcon|
|MailOpenIcon|EnvelopeOpenIcon|
|MailIcon|EnvelopeIcon|
|MenuAlt1Icon|Bars3CenterLeftIcon|
|MenuAlt2Icon|Bars3BottomLeftIcon|
|MenuAlt3Icon|Bars3BottomRightIcon|
|MenuAlt4Icon|Bars2Icon|
|MenuIcon|Bars3Icon|
|MinusSmIcon|MinusSmallIcon|
|MusicNoteIcon|MusicalNoteIcon|
|OfficeBuildingIcon|BuildingOfficeIcon|
|PencilAltIcon|PencilSquareIcon|
|PhoneIncomingIcon|PhoneArrowDownLeftIcon|
|PhoneMissedCallIcon|PhoneXMarkIcon|
|PhoneOutgoingIcon|PhoneArrowUpRightIcon|
|PhotographIcon|PhotoIcon|
|PlusSmIcon|PlusSmallIcon|
|PuzzleIcon|PuzzlePieceIcon|
|QrcodeIcon|QrCodeIcon|
|ReceiptTaxIcon|ReceiptPercentIcon|
|RefreshIcon|ArrowPathIcon|
|ReplyIcon|ArrowUturnLeftIcon|
|RewindIcon|BackwardIcon|
|SaveAsIcon|ArrowDownOnSquareStackIcon|
|SaveIcon|ArrowDownOnSquareIcon|
|SearchCircleIcon|MagnifyingGlassCircleIcon|
|SearchIcon|MagnifyingGlassIcon|
|SelectorIcon|ChevronUpDownIcon|
|SortAscendingIcon|BarsArrowUpIcon|
|SortDescendingIcon|BarsArrowDownIcon|
|SpeakerphoneIcon|MegaphoneIcon|
|StatusOfflineIcon|SignalSlashIcon|
|StatusOnlineIcon|SignalIcon|
|SupportIcon|LifebuoyIcon|
|SwitchHorizontalIcon|ArrowsRightLeftIcon|
|SwitchVerticalIcon|ArrowsUpDownIcon|
|TableIcon|TableCellsIcon|
|TemplateIcon|RectangleGroupIcon|
|TerminalIcon|CommandLineIcon|
|ThumbDownIcon|HandThumbDownIcon|
|ThumbUpIcon|HandThumbUpIcon|
|TranslateIcon|LanguageIcon|
|TrendingDownIcon|ArrowTrendingDownIcon|
|TrendingUpIcon|ArrowTrendingUpIcon|
|UploadIcon|ArrowUpTrayIcon|
|UserAddIcon|UserPlusIcon|
|UserRemoveIcon|UserMinusIcon|
|ViewBoardsIcon|ViewColumnsIcon|
|ViewGridAddIcon|SquaresPlusIcon|
|ViewGridIcon|Squares2x2Icon|
|ViewListIcon|Bars4Icon|
|VolumeOffIcon|SpeakerXMarkIcon|
|VolumeUpIcon|SpeakerWaveIcon|
|XIcon|XMarkIcon|
|ZoomInIcon|MagnifyingGlassPlusIcon|
|ZoomOutIcon|MagnifyingGlassMinusIcon|

# Documentation

See [heroicons.com](https://heroicons.com) for the full list of icons.

# License

As with the main Heroicons library, this library is MIT licensed.

# Credit

All credit goes to Tailwind Labs for designing the icons and to the [svg-to-svelte](https://github.com/metonym/svg-to-svelte) library for the tooling to wrap them as Svelte components.
