// User types
export type UserRole = 'client' | 'provider' | 'admin' | 'super_admin'
export type UserStatus = 'active' | 'suspended' | 'deleted'

export type BookingStatus =
  | 'pending'
  | 'matching'
  | 'matched'
  | 'confirmed'
  | 'scheduled'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'disputed'
  | 'refunded'

export type PaymentStatus =
  | 'pending'
  | 'authorized'
  | 'captured'
  | 'split_completed'
  | 'pro_paid'
  | 'refunded'
  | 'failed'

export type DisputeType = 'delay' | 'quality' | 'no_show' | 'damage' | 'overcharge' | 'other'
export type DisputeStatus =
  | 'opened'
  | 'classifying'
  | 'auto_resolving'
  | 'chatbot'
  | 'proposed'
  | 'escalated'
  | 'resolved'
  | 'closed'

export type VerificationStatus =
  | 'pending'
  | 'documents_received'
  | 'verifying'
  | 'verified'
  | 'rejected'
  | 'suspended'
  | 'expired'

export interface ApiResponse<T> {
  data: T
  message?: string
  meta?: { total: number; page: number; limit: number }
}

export interface PaginationDto {
  page?: number
  limit?: number
}

export const COMMISSION_RATE = 0.25
export const SERVICE_FEE_RATE = 0.05
export const PROVIDER_PAYOUT_RATE = 0.75
