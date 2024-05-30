"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { formUrlQuery } from '@/lib/utils'

type PaginationProps = {
  page: number | string,
  totalPages: number,
  urlParamName?: string
}

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Ensure page is a valid number and default it if necessary
  const currentPage = isNaN(Number(page)) ? 1 : Number(page)
  
  const onClick = (btnType: string) => {
    const pageValue = btnType === 'next' 
      ? currentPage + 1 
      : currentPage - 1

    // Ensure pageValue is within valid bounds
    if (pageValue < 1 || pageValue > totalPages) return

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || 'page',
      value: pageValue.toString(),
    })

    router.push(newUrl, {scroll: false})
  }

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick('prev')}
        disabled={currentPage <= 1}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick('next')}
        disabled={currentPage >= totalPages}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
