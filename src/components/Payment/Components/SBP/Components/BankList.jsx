import style from './BankList.module.scss';
import SberIcon from '../../../../../assets/icons/Sber.svg';
import TbankIcon from '../../../../../assets/icons/Tbank.svg';
import VtbIcon from '../../../../../assets/icons/Vtb.svg';
import AlfaIcon from '../../../../../assets/icons/Alfa.svg';
import RaifIcon from '../../../../../assets/icons/Raif.svg';

const bankList = [
    {
        id: 0,
        title: 'СБЕРБАНК',
        img: {
            src: SberIcon,
            alt: 'Sber'
        }
    },
    {
        id: 1,
        title: 'Т-Банк',
        img: {
            src: TbankIcon,
            alt: 'T-Bank'
        }
    },
    {
        id: 2,
        title: 'Банк ВТБ',
        img: {
            src: VtbIcon,
            alt: 'VTB'
        }
    },
    {
        id: 3,
        title: 'АЛЬФА-БАНК',
        img: {
            src: AlfaIcon,
            alt: 'Alfa'
        }
    },
    {
        id: 4,
        title: 'Райффайзенбанк',
        img: {
            src: RaifIcon,
            alt: 'Raiffeisen'
        }
    },
];

export const CustomButton = ({ bank, onClick }) => {
    return (
        <button className={style.btn} onClick={onClick}>
            {bank.title}
            <img src={bank.img.src} alt={bank.img.alt} />
        </button>
    )
}

const BankList = ({ setSbp, setCardDetails }) => {
    const handleBankClick = () => {
        setSbp(false);
        setCardDetails(true);
    };

    return (
        <div>
            {bankList.map((bank) => (
                <CustomButton 
                    key={bank.id} 
                    bank={bank} 
                    onClick={handleBankClick} // Передаем обработчик клика
                />
            ))}
        </div>
    );
}

export default BankList;
