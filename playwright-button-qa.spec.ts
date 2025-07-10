import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('메인 페이지 버튼 QA', () => {
  test('모든 주요 버튼 클릭 및 동작 확인', async ({ page, context }) => {
    await page.goto(BASE_URL);

    // 버튼 정보: [버튼 텍스트, aria-label, 예상 동작 설명]
    const buttons = [
      { label: 'LinkedIn', description: '새 탭에서 LinkedIn 페이지가 열려야 함' },
      { label: 'GitHub', description: 'GitHub 버튼(동작 미정)' },
      { label: 'Email', description: 'Email 버튼(동작 미정)' },
      { label: '이력서 다운로드', description: '이력서 파일 다운로드(동작 미정)' },
      { label: '이메일 보내기', description: '이메일 앱/폼 열림(동작 미정)' },
      { label: 'LinkedIn 연결', description: '새 탭에서 LinkedIn 페이지가 열려야 함' },
    ];

    for (const btn of buttons) {
      // 버튼 찾기 (텍스트 기준)
      const button = page.getByRole('button', { name: btn.label });
      await expect(button).toBeVisible();
      // 새 창/탭이 열리는 버튼은 context.waitForEvent로 확인
      if (btn.label.includes('LinkedIn')) {
        const [newPage] = await Promise.all([
          context.waitForEvent('page'),
          button.click(),
        ]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain('linkedin.com');
        await newPage.close();
      } else {
        // 기타 버튼은 클릭만 시도
        await button.click();
      }
    }
  });
}); 