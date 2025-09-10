import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface RulesModalProps {
    open: boolean;
    onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ open, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            fullScreen={isMobile}
        >
            <DialogTitle sx={{
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 'bold',
                        color: 'primary.main'
                    }}
                >
                    Правила события «Кризис Севера»
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'text.secondary',
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers sx={{ bgcolor: 'background.default', p: isMobile ? 2 : 3 }}>
                <Box sx={{ py: 1 }}>
                    {/* Введение */}
                    <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
                        Война в Эдильдоре перешла в новую фазу. Темнокожие Маубу взяли эльфийскую столицу
                        и стремительно вторгаются в другие части страны. Над Хоатрией нависает осознание угрозы:
                        если не предотвратить беду, враг накопит силы и ударит уже по империи. Только от действий
                        курфюрстов зависит, падёт ли Эдильдор под натиском угрозы Маубу, или же объединённая
                        имперская воля сокрушит захватчиков.
                    </Typography>

                    {/* Раздел 1: Курфюршеские характеристики */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'primary.main',
                            mb: 2,
                            fontWeight: 'bold',
                            borderBottom: '1px solid',
                            borderColor: 'primary.main',
                            pb: 0.5
                        }}
                    >
                        1. Силы империи
                    </Typography>

                    <Typography variant="body2" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                        У каждого курфюршества есть три основные характеристики, которые развиваются через действия в игре.
                    </Typography>

                    {/* Военная мощь */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'error.main', mb: 1 }}>
                            Военная мощь (ВМ)
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Что это:</strong> Отражает количество, качество и готовность армии. Текущее значение ВМ не может превышать значение Внутренней стабильности (ВС).
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Как увеличить:</strong> Успешные РП-действия, связанные с армией (приказы о тренировках, закупке снаряжения, строительстве крепостей, разгроме мелких банд). За каждое качественное действие вердер может назначить + 1 к ВМ.
                        </Typography>
                        <Typography variant="body2">
                            <strong>Как использовать:</strong> 1 единица ВМ условно соответствует 10 % от максимального размера армии, которую государство может содержать и снабжать. ВМ тратятся для участия в военных кампаниях (как против Маубу, так и для внутренних конфликтов).
                        </Typography>
                    </Box>

                    {/* Политический вес */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'info.main', mb: 1 }}>
                            Политический вес (ПВ)
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Что это:</strong> Отражает влияние на имперскую политику.
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Как увеличить:</strong>
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 1 }}>
                            <li><Typography variant="body2">Заключение любого двустороннего договора (торгового, пакта о ненападении) даёт каждой из сторон + 1 ПВ.</Typography></li>
                            <li><Typography variant="body2">Заключение крупного стратегического договора (соглашение о взаимопомощи против повстанцев, военный союз, соглашение об отложении выборов) даёт + 2 ПВ.</Typography></li>
                            <li><Typography variant="body2">Успешное завершение масштабного дипломатического или внутриполитического РП-события (на усмотрение вердера).</Typography></li>
                        </Box>
                        <Typography variant="body2">
                            <strong>Как использовать:</strong> ПВ — это единственный способ повлиять на Имперскую волю (ИЕ). Получаемые каждой страной ПВ сразу же прибавляются к показателю ИЕ. В случае проведения выборов императора курфюрст с наибольшим количеством ПВ будет иметь преимущество.
                        </Typography>
                    </Box>

                    {/* Внутренняя стабильность */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'success.main', mb: 1 }}>
                            Внутренняя стабильность (ВС)
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Что это:</strong> Важнейший показатель здоровья государства. Определяет максимальный потолок для Военной мощи (ВМ) и вероятность восстания.
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Как увеличить:</strong>
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 1 }}>
                            <li><Typography variant="body2">Через прямое решение проблем. Успешные и затратные РП-действия по укреплению власти (щедрые пиры для знати, устранение заговорщиков, победа в внутреннем кризисе) могут дать + 1 к ВС (по решению вердера).</Typography></li>
                            <li><Typography variant="body2">Конвертировать Военную мощь (ВМ). Два очка ВМ превращаются в одно очко ВС. Для этого необходимо написать приказ про увеличение гарнизонов в опасных провинциях.</Typography></li>
                        </Box>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Как уменьшается:</strong> Каждый игровой сезон ВС автоматически снижается на 2. Это фоновые распри, интриги, экономические проблемы и происки врагов. Неудачи в игре снижают её дополнительно.
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Влияние ВС на геймплей:</strong>
                        </Typography>
                        <Box component="ul" sx={{ pl: 3 }}>
                            <li><Typography variant="body2"><strong>7 {'<'} ВС ≤ 10:</strong> Страна относительно стабильна и может принимать участие во внешних походах.</Typography></li>
                            <li><Typography variant="body2"><strong>4 {'<'} ВС ≤ 7:</strong> Страна нестабильна и не может принимать участие во внешних походах.</Typography></li>
                            <li><Typography variant="body2"><strong>0 {'<'} ВС ≤ 4:</strong> Начинается внутренний кризис (крупный мятеж, ультиматум сословий). Правитель обязан потратить свои следующие действия на его решение.</Typography></li>
                            <li><Typography variant="body2"><strong>ВС = 0:</strong> Начинается гражданская война.</Typography></li>
                        </Box>
                    </Box>

                    {/* Раздел 2: Общие характеристики */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'primary.main',
                            mb: 2,
                            fontWeight: 'bold',
                            borderBottom: '1px solid',
                            borderColor: 'primary.main',
                            pb: 0.5
                        }}
                    >
                        2. Общие характеристики: Угроза и Единство
                    </Typography>

                    <Typography variant="body2" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                        Над всеми государствами Севера нависли две общие шкалы.
                    </Typography>

                    {/* Угроза Маубу */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'warning.main', mb: 1 }}>
                            Угроза Маубу (УМ)
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Что это:</strong> Шкала от 0 до 20. Показывает силу и уверенность захватчиков.
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Растёт автоматически:</strong> + 2 каждый игровой сезон. Время работает против империи!
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Растёт от их побед:</strong> + 2 за взятый захватчиками крупный город, + 1 за малый.
                        </Typography>
                        <Typography variant="body2">
                            <strong>Катастрофа:</strong> Если УМ достигнет 20, Эдильдор падёт. Маубу получат плацдарм для вторжения в Хоатрию, и угроза станет прямой для всех.
                        </Typography>
                    </Box>

                    {/* Имперское Единство */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'info.main', mb: 1 }}>
                            Имперское Единство (ИЕ)
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Что это:</strong> Шкала от 0 до 20. Отражает готовность империи к организации общего похода.
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>Как увеличить:</strong>
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 1 }}>
                            <li><Typography variant="body2">Конвертация ПВ: Политический вес (ПВ) от сделок между курфюрстами заполняет шкалу ИЕ.</Typography></li>
                            <li><Typography variant="body2">Помощь эльфов: успешные сделки с Эдильдором могут принести + 2 или + 3 к ИЕ.</Typography></li>
                        </Box>
                        <Typography variant="body2">
                            <strong>Цель:</strong> Чтобы объявить общеимперский поход против Маубу, необходимо, чтобы ИЕ ≥ УМ.
                        </Typography>
                    </Box>

                    {/* Раздел 3: Великий Поход */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'primary.main',
                            mb: 2,
                            fontWeight: 'bold',
                            borderBottom: '1px solid',
                            borderColor: 'primary.main',
                            pb: 0.5
                        }}
                    >
                        3. Великий Поход
                    </Typography>

                    <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                        Когда ИЕ сравняется или превысит УМ, любой правитель может инициировать Совет для объявления Великого Северного Похода.
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                        Каждый курфюрст на Совете должен пожертвовать какое-то количество ВМ чтобы создать армию для освобождения Эдильдора. Оставшиеся очки ВМ могут быть конвертированы правителем на укрепление Внутренней стабильности (2 ВМ = 1 ВС) для защиты своих земель на время кампании. Эти армии считаются оставленными для гарнизонной службы и не могут быть использованы как пополнения для армии похода.
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                        Курфюрст, пожертвовавший наибольшее количество ВМ, будет иметь преимущество на выборах императора.
                    </Typography>

                    {/* Раздел 4: Эльфийское влияние */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'primary.main',
                            mb: 2,
                            fontWeight: 'bold',
                            borderBottom: '1px solid',
                            borderColor: 'primary.main',
                            pb: 0.5
                        }}
                    >
                        4. Эльфийское влияние
                    </Typography>

                    <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                        Эдильдор не станет пассивно наблюдать. Эльфийские послы будут посещать курфюрстов с конкретными предложениями: оказать военную помощь, предоставить доступ к ресурсам.
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                        Принятие сделки даст различные бонусы к характеристикам страны. Сорвав сделку, курфюрст навлечёт на себя гнев древнего народа (– 2 к ВС, – 3 к ПВ).
                    </Typography>

                    {/* Раздел 5: Выборы императора */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'primary.main',
                            mb: 2,
                            fontWeight: 'bold',
                            borderBottom: '1px solid',
                            borderColor: 'primary.main',
                            pb: 0.5
                        }}
                    >
                        5. Выборы императора
                    </Typography>

                    <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                        Несмотря на заманчивость возможности выбрать лидера империи перед началом похода, отсутствие короля Барварии на троне ставит под сомнение легитимность этого процесса.
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                        <strong>В случае проведения выборов без участия Барварии</strong> империя расколется, и ИЕ обнулится.
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                        <strong>В случае коронации нового короля Барварии до освобождения прежнего монарха</strong> и его участия в выборах, Барвария получит – 5 к ВС из-за недовольства знати, считающей такой акт преждевременным и нелегитимным.
                    </Typography>
                    <Typography variant="body2">
                        <strong>В случае проведения выборов императора после победы над Маубу</strong> курфюрст, набравший большее количество ПВ и пожертвовавший больше всех ВМ в поход, получает преимущество.
                    </Typography>
                </Box>
            </DialogContent>

            <DialogActions sx={{ bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
                <Button
                    onClick={onClose}
                    color="primary"
                    variant="contained"
                    size={isMobile ? 'large' : 'medium'}
                    sx={{ mx: 2, mb: isMobile ? 2 : 1 }}
                >
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RulesModal;