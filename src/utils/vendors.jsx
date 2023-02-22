import BitcoinLogo from '../assets/vendor-bitcoin.svg';
import NinjaLogo from '../assets/vendor-ninja.svg';
import BlockchainLogo from '../assets/vendor-blockchain.svg';
import EvilLogo from '../assets/vendor-evil.svg';
import LightChip from '../assets/chip-light.svg';
import DarkChip from '../assets/chip-dark.svg';

const colors = {
    primary: '#000',
    secondary: '#fff',
    information: 'rgba(0, 0, 0, 0.8)'
};

const vendors = [
    {
        name: 'Bitcoin Inc',
        style: {
            logo: BitcoinLogo,
            chip: DarkChip,
            background: 'linear-gradient(248.04deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34',
            color: colors.primary,
            infoColor: colors.information,
        }
    },
    {
        name: 'Ninja Bank',
        style: {
            logo: NinjaLogo,
            chip: LightChip,
            background: 'linear-gradient(248.3deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222',
            color: colors.secondary,
            infoColor: colors.secondary
        }
    },
    {
        name: 'Block Chain Inc',
        style: {
            logo: BlockchainLogo,
            chip: LightChip,
            background: 'linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9',
            color: colors.secondary,
            infoColor: colors.secondary
        }
    },
    {
        name: 'Evil Corp',
        style: {
            logo: EvilLogo,
            chip: LightChip,
            background: 'linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355',
            color: colors.secondary,
            infoColor: colors.secondary
        }
    },
];

const defaultVendorStyle = {
    chip: DarkChip,
    background: 'linear-gradient(248.3deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #D0D0D0',
    color: colors.primary,
    infoColor: colors.information
};

// ------------------------------------------------------------------ //

function getVendorStyle(vendorName) {
    const vendor = vendors.find((vendor) => {
        return vendor.name.toUpperCase() === vendorName?.toUpperCase();
    });

    return vendor?.style || defaultVendorStyle;
}

const vendorNames = vendors.map((vendor) => {
    return vendor.name;
});

export { getVendorStyle, vendorNames, colors };