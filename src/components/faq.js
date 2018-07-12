import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    typography: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    typographyEx: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
});

const FaQ = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.paper}>
                <Grid item xs={12}>

                    <Grid container item spacing={0} justify="center" className={classes.paper} >
                        <Grid item xs={12} sm={6}>

                            <Paper className={classes.paper}>

                                <Typography variant="display2" component="h2" className={classes.typography}>
                                    STEPS
                                </Typography>

                                こちらではステップ毎の手順を説明します。<br/><br/>


                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP1: Ether(ETH)を入手する</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            このツールで ERC20トークンを作成するためには以下の費用がかかります。<br /><br />

                                            ・ツール使用手数料: 0.01 ETH<br />
                                            ・Ethereumネットワークの手数料 (Gas): およそ 0.01 - 0.04 ETH<br /><br />

                                            また、作成した ERC20トークンを他のウォレットに送信するためにもGasが必要になるため、およそ0.05 - 0.1ETH ほど用意しておくと良いでしょう。<br />
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP2: MetaMask をインストールする</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            すでに MetaMask をインストールしている場合は、STEP4 に進んでください。<br /><br />

                                            このツール自体が Etheruem のスマートコントラクトで作られているため、Etheruemのスマートコントラクトをブラウザから簡単に扱うことのできるMetaMaskというEthereumウォレットを使用します。MetaMaskはChromeブラウザのプラグインとして動作するので、Chromeを使用する必要があります。<br /><br />

                                            MetaMask は、次のリンクからインストールすることができます。<br /><br />

                                            <br />
                                            <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">MetaMask をインストール</a>

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP3: MetaMask のアカウントを作成</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            MetaMask をインストールしたら、ChromeブラウザのMetaMaskアイコンをクリックします。<br /><br />

                                            まだアカウントを作成していない場合は、利用規約に同意し、"ACCEPT" ボタンを押下する必要があります。<br /><br />

                                            "ACCEPT" ボタンを押下後、パスワードを入力し、アカウントを作成します。<br /><br />

                                            正常に MetaMask のアカウントが作成できていると、このウェブサイトの上部に「MetaMask Unlocked」と表示されます。<br /><br />


                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP4: MetaMask に Ether (ETH) を送付</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            作成した MetaMask のアドレスに Ether (ETH) を送付しておきます。<br /><br />

                                            およそ 0.05 - 0.1 ETH ほど用意しておくと良いでしょう。<br /><br />


                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP5: ERC20トークンを作成</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            フォームに必要項目を入力し、"SUBMIT" ボタンを押下します。<br /><br />
                                            "SUBMIT" ボタンを押すと、MetaMask の画面が表示されるので、内容を確認します。<br /><br />

                                            MetaMaskの画面内容を確認して、MetaMask上の"SUBMIT" ボタンを押下します。<br /><br />
                                            Gas Limit は変更しないでください。Gas Price は調整することができますが、Gas Price を低くしすぎるとブロックに取り込まれるまでに時間がかかるため、通常は変更しないことをおすすめします。<br /><br />

                                            正常にトランザクションが実行されると、「Transaction Hash」部分にトランザクションのIDにあたるものが表示されるので、必ず控えてください。<br /><br />

                                            トランザクションの状況は、トークンを作成したネットワークに応じて、つぎのリンクから確認することができます。<br /><br />


                                            <a target="_blank" rel="noopener noreferrer" href="https://ropsten.etherscan.io/">Rosten Etherscan</a><br />
                                            <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/">Main Etherscan</a>
                                            <br /><br />

                                            トランザクションが送信されてから、実際にブロックに取り込まれるまで数十秒から数分かかります。<br /><br />

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP6: ERC20トークンを確認</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            "CHECK CONTRACT ADDRESS" ボタンを押下すると、作成されたERC20トークンのアドレスを表示することができます。<br /><br />

                                            トランザクションがブロックに取り込まれるまでに時間がかかる場合があります。その場合「時間を置いてからお試しください。」というダイアログが表示されますので時間をおいて再度お試しください。<br /><br />

                                            トークンの詳細情報は、トークンを作成したネットワークに応じて、つぎのリンクから確認することができます。<br /><br />

                                            <a target="_blank" rel="noopener noreferrer" href="https://ropsten.etherscan.io/">Rosten Etherscan</a><br />
                                            <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/">Main Etherscan</a>

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP7: MetaMask にトークンを追加</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            トークンアドレスを取得したら、MetaMask にトークンアドレスを追加します。<br /><br />

                                            まず、トークンアドレスをコピーしておきます。<br /><br />

                                            つぎに、ブラウザの MetaMask アイコン をクリックし、TOKENSタブを開き、"ADD TOKEN"ボタンを押下し、"Token Contract Address"にトークンアドレスを入力します。<br /><br />

                                            TOKENSタブの"ADD TOKEN"ボタンをクリックします。<br /><br />

                                            "Token Contract Address"という項目に、先ほどコピーしたトークンアドレスを入力し、"ADD" ボタンを押下します。<br /><br />


                                            トークンが正常に追加されていることを確認します。<br /><br />


                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP8: ERC20トークンを他のウォレットに送付</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            MetaMaskだけでは、ERC20トークンの送付ができないため、MyEtherWalletを併用します。<br /><br />

                                            まず、MyEtherWallet の"Send Ether & Tokens" を開きます。<br /><br />

                                            つぎに、MyEtherWallet でもトークンを認識できるようにするため、画面右下の "Token Balances" の "Add Custom Token" ボタンをクリックし、"Token Contract Address"にトークンアドレスを入力します。
                                            "Token Symbol" にはトークンシンボル、Decimals には作成されたトークで入力してDecimalsを入力します。<br /><br />


                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>STEP9(Extra): 他のウォレット（アドレス）にトークンを送付</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>

                                            まず、"To Address" にトークンの送付先アドレスを入力します。<br /><br />

                                            つぎに、ETH と表示されている箇所をクリックし、プルダウンからトークンシンボルを選択します。<br /><br />

                                            ETH と表示されている箇所をクリックし、プルダウンからトークンシンボルを選択します。<br /><br />

                                            "Amount to Send" に送付するトークンの量を指定すると、Gas Limit が自動で調整されます。Gas Limit が自動で調整されない場合は、40000 程度を指定しておくと良いでしょう。<br /><br />

                                            さいごに、"Generate Transaction", "Send Transaction", "Yes, I am sure! Make transaction." の順にボタンを押下すると、MetaMask の確認画面が表示されるので、"SUBMIT" ボタンを押下します。<br /><br />

                                            しばらくすると、トランザクションがブロックに取り込まれ、トークンの送付が完了します。<br /><br />


                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Paper>

                            <br />


                            <Paper className={classes.paper}>

                                <Typography variant="display2" component="h2" className={classes.typography}>
                                    FAQ
                                </Typography>

                                こちらでは頻繁にお問い合わせいただくものに対して回答しています。<br/><br/>

                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>スマホで動作しますか？</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>
                                            しません。MetaMaskというPCのブラウザのChrome等で動作するエクステンションが動作する環境でのみ動作します。<br />
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>MetaMaskとは何ですか？</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>
                                            MetaMaskとはブラウザのエクステンションで主要なイーサリアムウォレットの一つです。<br/>
                                            セキュリティレベルが高いことでも有名で利用される方は多いです。<br />

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>このサイトはどのEthereumネットワークに対応していますか？</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography className={classes.typographyEx}>
                                           現在はメインネットワークとRopstenのテストネットワークに対応しています。<br/>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Paper>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
};

FaQ.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaQ);