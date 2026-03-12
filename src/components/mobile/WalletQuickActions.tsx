import { useI18n } from '../../i18nCore'

type WalletQuickActionsProps = {
  onToggleProfits?: () => void
  onDepositClick?: () => void
}

export function WalletQuickActions({ onToggleProfits, onDepositClick }: WalletQuickActionsProps) {
  const { t } = useI18n()

  return (
    <div className="wallet-quick-actions">
      <button
        type="button"
        className="wallet-quick-profits wallet-quick-deposit"
        onClick={onDepositClick}
      >
        {t('deposit')}
      </button>
      <button
        type="button"
        className="wallet-quick-profits"
        onClick={onToggleProfits}
      >
        {t('wallet_profits')}
      </button>
    </div>
  )
}
