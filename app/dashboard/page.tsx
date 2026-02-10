
export default function Page() {
  return (
    <div className="h-[calc(100vh-(var(--header-height))-16px)] bg-saceites-2 p-2 rounded-b-xl">
      <iframe
        title="test_dashboard"
        src="https://app.powerbi.com/reportEmbed?reportId=edc2bcda-db6d-4db7-a99a-061cef07603c&autoAuth=true&ctid=cbcbf211-eab4-4808-ad3f-e9b448bd3320&actionBarEnabled=true"
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
      />
    </div>
  )
}
